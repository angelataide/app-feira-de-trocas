import jwt from 'jsonwebtoken';

const validarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({ message: 'Token não fornecido ou mal formatado.' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        req.user = decodedPayload;

        next();
    } catch (error) {
        return res.status(403).json({
            message: 'Token inválido ou expirado. Faça login novamente.',
        });
    }
};

export default validarToken;
