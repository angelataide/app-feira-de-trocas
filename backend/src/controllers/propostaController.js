// Importo o serviço de propostas para lidar com as regras de negócio das propostas
import propostaService from '../services/propostaService.js';

// Função para criar uma nova proposta de troca
const create = async (req, res) => {
  try {
    // Cria a proposta usando o serviço
    const proposta = await propostaService.createProposta(req.body);
    res.status(201).json(proposta); // Retorna a proposta criada
  } catch (error) {
    res.status(400).json({ message: error.message }); // Retorna erro se algo der errado
  }
};

// Função para responder uma proposta (aceitar, recusar ou cancelar)
const responder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Espera receber 'ACEITA', 'RECUSADA' ou 'CANCELADA'

    if (!['ACEITA', 'RECUSADA', 'CANCELADA'].includes(status)) {
      return res.status(400).json({ message: 'Status inválido.' }); // Valida o status
    }
    // Atualiza o status da proposta
    const proposta = await propostaService.responderProposta(id, status);
    return res.status(200).json(proposta); // Retorna a proposta atualizada
  } catch (error) {
    return res.status(400).json({ message: error.message }); // Retorna erro se algo der errado
  }
};

// Exporto as funções para serem usadas nas rotas
export default { create, responder };
