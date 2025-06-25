// Importo os repositórios de proposta e item para acessar o banco
import propostaRepository from '../repositories/propostaRepository.js';
import itemRepository from '../repositories/itemRepository.js';

// Função para criar uma nova proposta de troca
const createProposta = async (propostaData) => {
  const { solicitanteId, itemOfertadoId, itemDesejadoId } = propostaData;

  // Verifico se o item ofertado existe e está disponível
  const itemOfertado = await itemRepository.findById(itemOfertadoId);
  if (!itemOfertado || itemOfertado.status !== 'DISPONIVEL') {
    throw new Error('Item ofertado não está disponível ou não foi encontrado.');
  }

  // Verifico se o item desejado existe e está disponível
  const itemDesejado = await itemRepository.findById(itemDesejadoId);
  if (!itemDesejado || itemDesejado.status !== 'DISPONIVEL') {
    throw new Error('Item desejado não está disponível ou não foi encontrado.');
  }

  // Garante que o item ofertado pertence ao solicitante
  if (itemOfertado.usuarioId !== solicitanteId) {
    throw new Error('O item ofertado não pertence ao usuário solicitante.');
  }

  // Impede que o usuário proponha troca com ele mesmo
  if (itemOfertado.usuarioId === itemDesejado.usuarioId) {
    throw new Error('Não é possível propor uma troca consigo mesmo.');
  }

  // Cria a proposta no banco
  return propostaRepository.create(propostaData);
};

// Função para responder uma proposta (aceitar, recusar ou cancelar)
const responderProposta = async (id, status) => {
  // Busca a proposta pelo id
  const proposta = await propostaRepository.findById(id);
  if (!proposta) {
    throw new Error('Proposta não encontrada.');
  }

  if (status === 'ACEITA') {
    // Regra de negócio: Se a proposta for aceita, marca ambos os itens como TROCADO
    await itemRepository.update(proposta.itemOfertadoId, { status: 'TROCADO' });
    await itemRepository.update(proposta.itemDesejadoId, { status: 'TROCADO' });
  }

  // Atualiza o status da proposta
  return propostaRepository.updateStatus(id, status);
};

// Exporto as funções para serem usadas no controller
export default { createProposta, responderProposta };