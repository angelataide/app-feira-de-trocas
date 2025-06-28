// Importo o serviço de itens para lidar com as regras de negócio dos itens
import itemService from '../services/itemService.js';

// Função para criar um novo item
const create = async (req, res) => {
    try {
        const item = await itemService.createItem(req.body); // Cria o item usando o service
        res.status(201).json(item); // Retorna o item criado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Retorna erro se algo der errado
    }
};

// Função para buscar todos os itens
const getAll = async (req, res) => {
    try {
        const items = await itemService.getAllItems(); // Busca todos os itens
        res.status(200).json(items); // Retorna a lista de itens
    } catch (error) {
        res.status(500).json({ message: error.message }); // Retorna erro se algo der errado
    }
};

// Função para buscar um item pelo id
const getById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id); // Busca item pelo id
        res.status(200).json(item); // Retorna o item
    } catch (error) {
        res.status(404).json({ message: error.message }); // Retorna erro se não encontrar
    }
};

// Função para atualizar um item
const update = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body); // Atualiza o item
        res.status(200).json(item); // Retorna o item atualizado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Retorna erro se não encontrar
    }
};

// Função para remover um item
const remove = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id); // Remove o item
        res.status(204).send(); // Retorna status 204 (sem conteúdo)
    } catch (error) {
        res.status(404).json({ message: error.message }); // Retorna erro se não encontrar
    }
};

// Exporto todas as funções para serem usadas nas rotas
export default {
    create,
    getAll,
    getById,
    update,
    remove,
};
