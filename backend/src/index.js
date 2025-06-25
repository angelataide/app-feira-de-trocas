// Importo o Express para criar o servidor HTTP
import express from 'express';
// Importo o CORS para permitir requisições de outros domínios
import cors from 'cors';

// Importo as rotas da aplicação
import userRoutes from './routes/userRoutes.js'; // Rotas de usuário
import itemRoutes from './routes/itemRoutes.js'; // Rotas de itens
import propostaRoutes from './routes/propostaRoutes.js'; // Rotas de propostas

// Crio a aplicação Express
const app = express();
// Defino a porta do servidor (usa a variável de ambiente ou 3000)
const port = process.env.PORT || 3000;

// Middlewares globais
app.use(cors()); // Permite requisições de outros domínios
app.use(express.json()); // Permite receber JSON no corpo das requisições

// Registro das rotas com prefixo /api
app.use('/api', userRoutes); // Rotas de usuário
app.use('/api', itemRoutes); // Rotas de itens
app.use('/api', propostaRoutes); // Rotas de propostas

// Inicia o servidor e exibe mensagem no console
app.listen(port, () => {
  console.log(`🚀 Servidor do TrocaAi rodando na porta ${port}`);
});