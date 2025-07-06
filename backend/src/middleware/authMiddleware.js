import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const validarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" })
    }

    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (erro, usuario) => {
        if (erro) {
            return res.status(403).json({ message: "Token inválido" });
        }

        req.usuario = usuario;
        next();
    });
}

export default validarToken;
