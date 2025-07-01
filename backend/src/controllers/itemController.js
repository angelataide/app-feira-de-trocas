import itemService from '../services/itemService.js';

const create = async (req, res) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
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

export default {
    create,
    getAll,
    getById,
    update,
    remove,
};
