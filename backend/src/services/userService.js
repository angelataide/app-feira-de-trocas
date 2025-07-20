import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';

async function createUsuario(userData) {
    const { nome, email, senha, telefone, bairro } = userData;

    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
        throw new Error('Este email já está em uso.');
    }

    const senhaHash = await bcrypt.hash(senha, 8);

    const newUser = await userRepository.create({
        nome,
        email,
        senha: senhaHash,
        telefone,
        bairro,
    });

    delete newUser.senha;

    const token = JWT.sign(
        { id: newUser.id, nome: newUser.nome },
        process.env.JWT_SECRET_TOKEN,
        { expiresIn: '1h' },
    );

    return { user: newUser, token };
}

async function getAllUsuarios() {
    return userRepository.findAll();
}

async function getUsuarioById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }
    return user;
}

async function loginUser(userData) {
    const { email, password } = userData;
    const usuario = await userRepository.findByEmail(email);

    if (!usuario) {
        throw new Error('Email ou senha incorretos.');
    }

    const senhaValida = await bcrypt.compare(password, usuario.senha);

    if (!senhaValida) {
        throw new Error('Email ou senha incorretos.');
    }

    delete usuario.senha;

    const token = JWT.sign(
        { id: usuario.id, nome: usuario.nome },
        process.env.JWT_SECRET_TOKEN,
        { expiresIn: '1h' },
    );

    return { user: usuario, token };
}

export default {
    createUsuario,
    getAllUsuarios,
    getUsuarioById,
    loginUser,
};
