// Importo o prisma para acessar o banco de dados
import prisma from '../prismaClient.js';

// Função para criar um novo item no banco
const create = async (itemData) => {
  const { nome, descricao, categoria, usuarioId } = itemData;
  return prisma.item.create({
    data: {
      nome_item: nome, // Mapeia o campo para o banco
      descricao,
      categoria,
      usuario: { connect: { id: usuarioId } }, // Conecta com o usuário dono
    },
  });
};

// Função para buscar todos os itens
const findAll = async () => {
  return prisma.item.findMany({
    include: {
      usuario: { // Inclui dados do usuário dono do item
        select: { id: true, nome: true, email: true },
      },
    },
  });
};

// Função para buscar um item pelo id
const findById = async (id) => {
  return prisma.item.findUnique({
    where: { id: parseInt(id, 10) },
    include: { usuario: true },
  });
};

// Função para atualizar um item
const update = async (id, itemData) => {
  // Se vier o campo nome, mapeia para nome_item
  if (itemData.nome) {
    itemData.nome_item = itemData.nome;
    delete itemData.nome;
  }
  return prisma.item.update({
    where: { id: parseInt(id, 10) },
    data: itemData,
  });
};

// Função para remover um item
const remove = async (id) => {
  return prisma.item.delete({
    where: { id: parseInt(id, 10) },
  });
};

// Exporto as funções para serem usadas no service
export default {
  create,
  findAll,
  findById,
  update,
  remove,
};