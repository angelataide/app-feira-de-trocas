import itemRepository from '../repositories/itemRepository.js';
import userRepository from '../repositories/userRepository.js';

async function createItem(itemData) {
    const userExists = await userRepository.findById(itemData.usuarioId);
    if (!userExists) {
        throw new Error('Usuário não encontrado.');
    }
    const createdItem = await itemRepository.create(itemData);
    return createdItem;
}

async function getAllItems() {
    const itemsFromDb = await itemRepository.findAll();

    return itemsFromDb.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        categoria: item.categoria,
        imagem: item.imagemUrl,
        usuario: item.usuario.nome,
        bairro: item.usuario.bairro,
        dataPublicacao: item.createdAt.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }),
        rating: 4.5,
        likes: 10,
    }));
}

async function getItemById(id) {
    const item = await itemRepository.findById(id);
    if (!item) {
        throw new Error('Item não encontrado.');
    }
    return {
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        categoria: item.categoria,
        imagem: item.imagemUrl,
        usuario: item.usuario.nome,
        bairro: item.usuario.bairro,
        dataPublicacao: item.createdAt.toLocaleDateString('pt-BR'),
        status: item.status.toLowerCase(),
        condicao: item.condicao,
        observacoes: item.observacoes,
        usuarioId: item.usuarioId,
    };
}

async function updateItem(id, itemData) {
    await getItemById(id);

    return await itemRepository.update(id, itemData);
}

async function deleteItem(id) {
    await getItemById(id);

    await itemRepository.remove(id);
}

async function getItemsByUserId(userId) {
    // Aqui podemos no futuro formatar os dados se necessário
    return itemRepository.findByOwnerId(userId);
}

async function getAllAvailableItems() {
    const itemsFromDb = await itemRepository.findAllAvailable();

    // Reutilizamos a mesma lógica de formatação de antes
    return itemsFromDb.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        categoria: item.categoria,
        imagem: item.imagemUrl,
        usuario: item.usuario.nome,
        bairro: item.usuario.bairro,
        dataPublicacao: item.createdAt.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }),
        rating: 4.5,
        likes: 10,
    }));
}

export default {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    getItemsByUserId,
    getAllAvailableItems,
};
