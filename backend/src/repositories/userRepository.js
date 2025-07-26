import prisma from '../database/prismaClient.js';

const create = async (data) => prisma.usuario.create({ data });

const findByEmail = async (email) =>
    prisma.usuario.findUnique({
        where: { email },
        //
    });

const findAll = async () =>
    prisma.usuario.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            itens: true,
        },
    });

const findById = async (id) =>
    prisma.usuario.findUnique({
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            itens: true,
        },
    });

export default {
    create,
    findByEmail,
    findAll,
    findById,
};
