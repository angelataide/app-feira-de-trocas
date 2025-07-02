// Importo o serviço de usuário para lidar com regras de negócio
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';

// Função para criar um novo usuário
const createUsuario = async (userData) => {
    const { nome, email, senha, telefone } = userData;

    // Verifico se já existe um usuário com esse email
    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
        throw new Error('Este email já está em uso.');
    }

    // Faço o hash da senha antes de salvar
    const senhaHash = await bcrypt.hash(senha, 8);

    // Crio o usuário no banco
    const newUser = await userRepository.create({
        nome,
        email,
        senha: senhaHash,
        telefone,
    });

    // Removo a senha do retorno por segurança
    delete newUser.senha;
    return newUser;
};

// Função para buscar todos os usuários
const getAllUsuarios = async () => userRepository.findAll();

// Função para buscar um usuário pelo id
const getUsuarioById = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }
    return user;
};

const loginUser = async (userData) => {
    const {
        email,
        senha,
        //
    } = userData;
    const usuario = await userRepository.findByEmail(email);

    if (!usuario) {
        throw new Error('Usuário não encontrado.');
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        throw new Error('E-mail/Senha incorreta');
    }
    delete usuario.senha;
    const token = JWT.sign(usuario, process.env.JWT_SECRET_TOKEN, {expiresIn: '1h'});

    return token;
};

// Exporto as funções para serem usadas no controller
export default {
    createUsuario,
    getAllUsuarios,
    getUsuarioById,
    loginUser,
};
