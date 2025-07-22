import itemService from '../services/itemService.js';

const create = async (req, res) => {
    try {
        // Se tem arquivo, seta a url no body
        if (req.file) {
            req.body.imagemUrl = `${req.user.id}/${req.file.filename}`; // só isso, sem 'http://...'
        }
        // Garante que o item pertence ao usuário logado
        req.body.usuarioId = req.user.id;

        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAll = async (req, res, next) => {
    try {
        const items = await itemService.getAllAvailableItems();
        res.status(200).json(items);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getMyItems = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const items = await itemService.getItemsByUserId(userId);
        res.status(200).json(items);
    } catch (error) {
        next(error);
    }
};

export default {
    create,
    getAll,
    getById,
    update,
    remove,
    getMyItems,
};
