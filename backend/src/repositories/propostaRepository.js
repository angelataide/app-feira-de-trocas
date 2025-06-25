// Importo o prisma para acessar o banco de dados
import prisma from '../prismaClient.js';

// Função para criar uma nova proposta no banco
const create = async (data) => {
  const { solicitanteId, itemOfertadoId, itemDesejadoId } = data;
  return prisma.proposta.create({
    data: {
      solicitanteId,
      itemOfertadoId,
      itemDesejadoId,
    },
  });
};

// Função para buscar uma proposta pelo id
const findById = async (id) => {
  return prisma.proposta.findUnique({
    where: { id_prop: parseInt(id, 10) }, // Usa o campo id_prop do banco
    include: {
      solicitante: { select: { id: true, nome: true } }, // Inclui dados do solicitante
      itemOfertado: true, // Inclui dados do item ofertado
      itemDesejado: true, // Inclui dados do item desejado
    },
  });
};

// Função para atualizar o status de uma proposta
const updateStatus = async (id, status) => {
  return prisma.proposta.update({
    where: { id_prop: parseInt(id, 10) },
    data: { status },
  });
};

// Exporto as funções para serem usadas no service
export default { create, findById, updateStatus };