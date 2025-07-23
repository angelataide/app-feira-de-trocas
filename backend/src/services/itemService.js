import path from 'path';
import fs from 'fs/promises';
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
        imagem: `http://localhost:3000/api/upload/${item.imagemUrl}`,
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
        imagem: `http://localhost:3000/api/upload/${item.imagemUrl}`,
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
    return itemRepository.update(id, itemData);
}

async function deleteItem(id) {
    const item = await getItemById(id); // já retorna usuarioId e imagem (URL completa)

    await itemRepository.remove(id);

    if (item.imagem) {
        // Extrai o caminho relativo da imagem a partir da URL
        const relativePath = item.imagem.split('/api/upload/')[1]; // ex: "5/1753232880110.jpg"
        const imagePath = path.join('upload', relativePath); // caminho real no disco

        try {
            await fs.unlink(imagePath);
            console.log('Imagem excluída com sucesso:', imagePath);
        } catch (err) {
            console.warn('Falha ao excluir imagem:', imagePath, err.message);
        }
    }
}

async function getItemsByUserId(userId) {
    return itemRepository.findByOwnerId(userId);
}

async function getAllAvailableItems() {
    const itemsFromDb = await itemRepository.findAllAvailable();

    return itemsFromDb.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        categoria: item.categoria,
        imagem: `http://localhost:3000/api/upload/${item.imagemUrl}`,
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
