import prisma from '../database/prismaClient.js';

function create(propostaData) {
    return prisma.proposta.create({
        data: propostaData,
    });
}

function findPropostasByUser(userId) {
    return prisma.proposta.findMany({
        where: {
            OR: [{ solicitanteId: userId }, { receptorId: userId }],
        },
        include: {
            solicitante: { select: { id: true, nome: true } },
            receptor: { select: { id: true, nome: true } },
            itemOfertado: {
                select: { id: true, titulo: true, imagemUrl: true },
            },
            itemDesejado: {
                select: { id: true, titulo: true, imagemUrl: true },
            },
            mensagens: {
                orderBy: { createdAt: 'asc' },
                include: { autor: { select: { id: true, nome: true } } },
            },
        },
        orderBy: { updatedAt: 'desc' },
    });
}

function updateStatus(propostaId, novoStatus) {
    return prisma.proposta.update({
        where: { id: propostaId },
        data: { status: novoStatus },
    });
}

function findById(propostaId) {
    return prisma.proposta.findUnique({
        where: { id: propostaId },
    });
}

function createMessage(propostaId, autorId, conteudo) {
    return prisma.mensagem.create({
        data: {
            conteudo,
            proposta: { connect: { id: propostaId } },
            autor: { connect: { id: autorId } },
        },
        include: {
            autor: { select: { id: true, nome: true } },
        },
    });
}

function findMessagesByProposalId(propostaId) {
    return prisma.mensagem.findMany({
        where: { propostaId },
        include: {
            autor: { select: { id: true, nome: true } },
        },
        orderBy: {
            createdAt: 'asc',
        },
    });
}

export default {
    create,
    findPropostasByUser,
    updateStatus,
    findById,
    createMessage,
    findMessagesByProposalId,
};
