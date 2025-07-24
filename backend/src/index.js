import express from 'express';
import cors from 'cors';
import path from 'path';

import userRoutes from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import propostaRoutes from './routes/propostaRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/upload', express.static(path.join(process.cwd(), 'upload')));

app.use('/api', userRoutes);
app.use('/api', itemRoutes);
app.use('/api', propostaRoutes);

app.listen(port, () => {
    console.log(`🚀 Servidor do TrocaAi rodando na porta ${port}`);
});
