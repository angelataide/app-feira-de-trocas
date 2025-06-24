import express from 'express';

const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Backend rodando tranquilo e suave! 🚀');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
