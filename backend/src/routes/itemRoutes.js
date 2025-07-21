import { Router } from 'express';
import itemController from '../controllers/itemController.js';
import validarToken from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = Router();

// IMPORTANTE: Rotas mais específicas devem vir ANTES de rotas dinâmicas
// Rota para buscar os itens do usuário logado (protegida por token)
router.get('/items/me', validarToken, itemController.getMyItems);

router.post(
    '/items',
    validarToken,
    upload.single('imagem'),
    itemController.create,
); // <-- Rota de criação agora precisa de token
router.get('/items', itemController.getAll);
router.get('/items/:id', itemController.getById);
router.put('/items/:id', validarToken, itemController.update); // <-- Rota de update protegida
router.delete('/items/:id', validarToken, itemController.remove); // <-- Rota de delete protegida

export default router;
