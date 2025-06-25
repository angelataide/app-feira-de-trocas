// Importo o serviço do usuário para lidar com regras de negócio
import userService from '../services/userService.js';

// Função para criar um novo usuário
const create = async (req, res) => {
  try {
    const user = await userService.createUsuario(req.body); // Cria o usuário usando o service
    res.status(201).json(user); // Retorna o usuário criado
  } catch (error) {
    res.status(400).json({ message: error.message }); // Retorna erro se algo der errado
  }
};

// Função para buscar todos os usuários
const getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsuarios(); // Busca todos os usuários
    res.status(200).json(users); // Retorna a lista
  } catch (error) {
    res.status(500).json({ message: error.message }); // Retorna erro se algo der errado
  }
};

// Função para buscar um usuário pelo id
const getById = async (req, res) => {
  try {
    const user = await userService.getUsuarioById(req.params.id); // Busca usuário pelo id
    res.status(200).json(user); // Retorna o usuário
  } catch (error) {
    res.status(404).json({ message: error.message }); // Retorna erro se não encontrar
  }
};

// Exporto as funções para serem usadas nas rotas
export default { create, getAll, getById };