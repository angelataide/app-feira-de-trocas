// Importo o serviço de itens e usuários para aplicar regras de negócio
import itemRepository from '../repositories/itemRepository.js';
import userRepository from '../repositories/userRepository.js';

// Função para criar um novo item
const createItem = async (itemData) => {
    // Verifico se o usuário dono do item existe
    const userExists = await userRepository.findById(itemData.usuarioId);
    if (!userExists) {
        throw new Error('Usuário não encontrado. Não é possível criar o item.');
    }
    // Crio o item no banco
    return itemRepository.create(itemData);
};

// Função para buscar todos os itens
const getAllItems = async () => itemRepository.findAll();

// Função para buscar um item pelo id
const getItemById = async (id) => {
    const item = await itemRepository.findById(id);
    if (!item) {
        throw new Error('Item não encontrado.');
    }
    return item;
};

// Função para atualizar um item
const updateItem = async (id, itemData) => {
    // Verifico se o item existe antes de atualizar
    await getItemById(id);
    return itemRepository.update(id, itemData);
};

// Função para deletar um item
const deleteItem = async (id) => {
    // Verifico se o item existe antes de deletar
    await getItemById(id);
    return itemRepository.remove(id);
};

// Exporto as funções para serem usadas no controller
export default {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
};
