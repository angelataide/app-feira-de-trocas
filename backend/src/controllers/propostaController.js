import propostaService from '../services/propostaService.js';

async function create(req, res, next) {
    try {
        const solicitanteId = req.user.id;
        const proposta = await propostaService.createProposta(
            req.body,
            solicitanteId,
        );
        res.status(201).json(proposta);
    } catch (error) {
        next(error);
    }
}

async function getAll(req, res, next) {
    try {
        const userId = req.user.id;
        const propostas = await propostaService.getPropostas(userId);
        res.status(200).json(propostas);
    } catch (error) {
        next(error);
    }
}

async function aceitar(req, res, next) {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const propostaAtualizada =
            await propostaService.atualizarStatusProposta(
                parseInt(id),
                userId,
                'ACEITA',
            );
        res.status(200).json(propostaAtualizada);
    } catch (error) {
        next(error);
    }
}

async function recusar(req, res, next) {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const propostaAtualizada =
            await propostaService.atualizarStatusProposta(
                parseInt(id),
                userId,
                'RECUSADA',
            );
        res.status(200).json(propostaAtualizada);
    } catch (error) {
        next(error);
    }
}

async function addMessage(req, res, next) {
    try {
        const { id: propostaId } = req.params;
        const { id: autorId } = req.user;
        const { conteudo } = req.body;

        if (!conteudo) {
            return res.status(400).json({
                message: 'O conteúdo da mensagem não pode ser vazio.',
            });
        }

        const novaMensagem = await propostaService.addMessageToProposal(
            parseInt(propostaId),
            autorId,
            conteudo,
        );
        res.status(201).json(novaMensagem);
    } catch (error) {
        next(error);
    }
}

async function getMessages(req, res, next) {
    try {
        const { id: propostaId } = req.params;
        const userId = req.user.id;
        const mensagens = await propostaService.getMessagesForProposal(
            parseInt(propostaId),
            userId,
        );
        res.status(200).json(mensagens);
    } catch (error) {
        next(error);
    }
}

export default {
    create,
    getAll,
    aceitar,
    recusar,
    addMessage,
    getMessages,
};
