import itemRepository from '../repositories/itemRepository.js';
import userRepository from '../repositories/userRepository.js';

const createItem = async (itemData) => {
    const userExists = await userRepository.findById(itemData.usuarioId);
    if (!userExists) {
        throw new Error('Usuário não encontrado. Não é possível criar o item.');
    }

    return itemRepository.create(itemData);
};

const getAllItems = async () => itemRepository.findAll();

const getItemById = async (id) => {
    const item = await itemRepository.findById(id);
    if (!item) {
        throw new Error('Item não encontrado.');
    }
    return item;
};

const updateItem = async (id, itemData) => {
    await getItemById(id);
    return itemRepository.update(id, itemData);
};

const deleteItem = async (id) => {
    await getItemById(id);
    return itemRepository.remove(id);
};

export default {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
};
