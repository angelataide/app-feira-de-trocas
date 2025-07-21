import jwt from 'jsonwebtoken';
// dotenv só precisa ser configurado no arquivo principal (index.js), não aqui.

const validarToken = (req, res, next) => {
    console.log('--- MIDDLEWARE DE AUTH INICIADO ---');

    const authHeader = req.headers['authorization'];
    console.log('1. Header de autorização recebido:', authHeader);

    // Verificação mais robusta: o header existe E começa com "Bearer "?
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

        // Esta função vai lançar um erro se o token for inválido ou expirado
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        console.log(
            '4. Token verificado com SUCESSO! Payload decodificado:',
            decodedPayload,
        );

        // Anexando o payload ao objeto req
        req.user = decodedPayload;

        console.log(
            "5. Payload anexado em 'req.user'. Passando para o controller...",
        );

        next(); // Passa para a próxima função na rota (o controller)
    } catch (error) {
        // Se jwt.verify falhar, o código pula para este bloco catch
        console.error('--> FALHA na verificação do JWT:', error.message);
        return res
            .status(403)
            .json({
                message: 'Token inválido ou expirado. Faça login novamente.',
            });
    }
};

export default validarToken;
