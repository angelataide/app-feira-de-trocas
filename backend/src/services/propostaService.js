import prisma from '../database/prismaClient.js';
import propostaRepository from '../repositories/propostaRepository.js';
import itemRepository from '../repositories/itemRepository.js';

const formatarProposta = (proposta) => ({
    id: proposta.id,
    status: proposta.status,
    mensagemInicial: proposta.mensagemInicial,
    createdAt: proposta.createdAt,
    solicitante: proposta.solicitante || { id: -1, nome: 'Usuário Deletado' },
    receptor: proposta.receptor || { id: -1, nome: 'Usuário Deletado' },
    itemOfertado: proposta.itemOfertado || { id: -1, titulo: 'Item Deletado' },
    itemDesejado: proposta.itemDesejado || { id: -1, titulo: 'Item Deletado' },
    mensagens: proposta.mensagens || [],
});

async function createProposta(data, solicitanteId) {
    const { itemOfertadoId, itemDesejadoId, mensagemInicial } = data;
    const itemOfertado = await itemRepository.findById(itemOfertadoId);
    const itemDesejado = await itemRepository.findById(itemDesejadoId);

    if (!itemOfertado || !itemDesejado) {
        throw new Error('Um dos itens na proposta não foi encontrado.');
    }
    if (itemDesejado.usuarioId === solicitanteId) {
        throw new Error(
            'Você não pode fazer uma proposta por um item que já é seu.',
        );
    }
    if (itemOfertado.usuarioId !== solicitanteId) {
        throw new Error('Você só pode oferecer itens que lhe pertencem.');
    }

    const propostaData = {
        solicitanteId,
        receptorId: itemDesejado.usuarioId,
        itemOfertadoId,
        itemDesejadoId,
        mensagemInicial,
    };
    return propostaRepository.create(propostaData);
}

async function getPropostas(userId) {
    const propostasDoBanco =
        await propostaRepository.findPropostasByUser(userId);
    const propostasFormatadas = propostasDoBanco.map(formatarProposta);
    const propostasRecebidas = propostasFormatadas.filter(
        (p) => p.receptor.id === userId,
    );
    const propostasEnviadas = propostasFormatadas.filter(
        (p) => p.solicitante.id === userId,
    );
    return { propostasRecebidas, propostasEnviadas };
}

async function atualizarStatusProposta(propostaId, userId, novoStatus) {
    const proposta = await propostaRepository.findById(propostaId);
    if (!proposta) {
        throw new Error('Proposta não encontrada.');
    }
    if (proposta.receptorId !== userId) {
        throw new Error(
            'Ação não permitida. Você não é o receptor desta proposta.',
        );
    }
    if (proposta.status !== 'PENDENTE') {
        throw new Error(
            `Esta proposta já foi ${proposta.status.toLowerCase()}.`,
        );
    }

    if (novoStatus === 'RECUSADA' || novoStatus === 'CANCELADA') {
        return propostaRepository.updateStatus(propostaId, novoStatus);
    }

    if (novoStatus === 'ACEITA') {
        try {
            const resultado = await prisma.$transaction([
                prisma.proposta.update({
                    where: { id: propostaId },
                    data: { status: 'ACEITA' },
                }),
                prisma.item.update({
                    where: { id: proposta.itemOfertadoId },
                    data: { status: 'TROCADO' },
                }),
                prisma.item.update({
                    where: { id: proposta.itemDesejadoId },
                    data: { status: 'TROCADO' },
                }),
            ]);
            return resultado[0];
        } catch (error) {
            console.error('Erro na transação ao aceitar proposta:', error);
            throw new Error(
                'Não foi possível aceitar a proposta e atualizar os itens.',
            );
        }
    }
}

async function getMessagesForProposal(propostaId, userId) {
    const proposta = await propostaRepository.findById(propostaId);
    if (!proposta) throw new Error('Proposta não encontrada.');
    if (proposta.solicitanteId !== userId && proposta.receptorId !== userId) {
        throw new Error('Acesso não permitido a esta conversa.');
    }
    return propostaRepository.findMessagesByProposalId(propostaId);
}

async function addMessageToProposal(propostaId, userId, conteudo) {
    const proposta = await propostaRepository.findById(propostaId);
    if (!proposta) {
        throw new Error('Proposta não encontrada.');
    }

    if (proposta.solicitanteId !== userId && proposta.receptorId !== userId) {
        throw new Error(
            'Ação não permitida. Você não faz parte desta conversa.',
        );
    }

    return propostaRepository.createMessage(propostaId, userId, conteudo);
}

export default {
    createProposta,
    getPropostas,
    atualizarStatusProposta,
    getMessagesForProposal,
    addMessageToProposal, // <-- GARANTINDO QUE ESTÁ NA EXPORTAÇÃO
};
