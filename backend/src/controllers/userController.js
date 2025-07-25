import userService from '../services/userService.js';

const create = async (req, res) => {
    try {
        const user = await userService.createUsuario(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const users = await userService.getAllUsuarios();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const user = await userService.getUsuarioById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const credencial = await userService.loginUser(req.body);
        res.status(200).json(credencial);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

export default {
    create,
    getAll,
    getById,
    loginUser,
};
