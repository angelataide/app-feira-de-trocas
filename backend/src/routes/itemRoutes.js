// Importo o Router do Express para criar as rotas
import { Router } from 'express';
// Importo o controller de itens para lidar com as requisições
import itemController from '../controllers/itemController.js';
// Crio uma instância do router
const router = Router();

// Rota para criar um novo item
router.post('/items', itemController.create);
// Rota para listar todos os itens
router.get('/items', itemController.getAll);
// Rota para buscar um item pelo id
router.get('/items/:id', itemController.getById);
// Rota para atualizar um item
router.put('/items/:id', itemController.update);
// Rota para remover um item
router.delete('/items/:id', itemController.remove);

// Exporto o router para ser usado no index.js
export default router;
