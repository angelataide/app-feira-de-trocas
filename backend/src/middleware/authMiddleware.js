import jwt from 'jsonwebtoken';

const validarToken = (req, res, next) => {
    console.log('--- MIDDLEWARE DE AUTH INICIADO ---');

    const authHeader = req.headers['authorization'];
    console.log('1. Header de autorização recebido:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log(
            "--> FALHA: Header 'Authorization' ausente ou mal formatado.",
        );
        return res
            .status(401)
            .json({ message: 'Token não fornecido ou mal formatado.' });
    }

    const token = authHeader.split(' ')[1];
    console.log('2. Token extraído do header:', token);

    if (!token) {
        console.log("--> FALHA: Token não encontrado após o 'Bearer'.");
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    try {
        console.log('3. Tentando verificar o token com o segredo do .env...');

        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        console.log(
            '4. Token verificado com SUCESSO! Payload decodificado:',
            decodedPayload,
        );

        req.user = decodedPayload;

        console.log(
            "5. Payload anexado em 'req.user'. Passando para o controller...",
        );

        next();
    } catch (error) {
        console.error('--> FALHA na verificação do JWT:', error.message);
        return res.status(403).json({
            message: 'Token inválido ou expirado. Faça login novamente.',
        });
    }
};

export default validarToken;
