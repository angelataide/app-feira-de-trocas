import prisma from '../database/prismaClient.js';

function create(itemData) {
    return prisma.item.create({
        data: {
            titulo: itemData.titulo,
            descricao: itemData.descricao,
            categoria: itemData.categoria,
            condicao: itemData.condicao,
            observacoes: itemData.observacoes,
            imagemUrl: itemData.imagemUrl,
            status: 'DISPONIVEL',
            usuario: {
                connect: { id: itemData.usuarioId },
            },
        },
    });
}

function findAll() {
    return prisma.item.findMany({
        include: {
            usuario: {
                select: {
                    id: true,
                    nome: true,
                    bairro: true,
                },
            },
        },
    });
}

function findById(id) {
    return prisma.item.findUnique({
        where: { id: parseInt(id, 10) },
        include: { usuario: true },
    });
}

function update(id, itemData) {
    return prisma.item.update({
        where: { id: parseInt(id, 10) },
        data: itemData,
    });
}

async function remove(id) {
    await prisma.item.delete({
        where: { id: parseInt(id, 10) },
    });
}

function findByOwnerId(userId) {
    return prisma.item.findMany({
        where: {
            usuarioId: userId,
            status: 'DISPONIVEL', // <-- ADICIONAMOS O FILTRO DE STATUS AQUI
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}

function findAllAvailable() {
    return prisma.item.findMany({
        where: {
            status: 'DISPONIVEL', // O filtro agora está aqui!
        },
        include: {
            usuario: { select: { id: true, nome: true, bairro: true } },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}
export default {
    create,
    findAll,
    findById,
    update,
    remove,
    findByOwnerId,
    findAllAvailable,
};
