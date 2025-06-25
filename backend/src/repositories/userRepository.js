// Importo o prisma para acessar o banco de dados
import prisma from '../prismaClient.js';

// Função para criar um novo usuário no banco
const create = async (data) => {
  return prisma.usuario.create({ data });
};

// Função para buscar um usuário pelo email
const findByEmail = async (email) => {
  return prisma.usuario.findUnique({ where: { email } });
};

// Função para buscar todos os usuários
const findAll = async () => {
  return prisma.usuario.findMany({
    select: { id: true, nome: true, email: true, telefone: true, itens: true },
  });
};

// Função para buscar um usuário pelo id
const findById = async (id) => {
  return prisma.usuario.findUnique({
    where: { id: parseInt(id, 10) },
    select: { id: true, nome: true, email: true, telefone: true, itens: true },
  });
};

// Exporto as funções para serem usadas no service
export default { create, findByEmail, findAll, findById };