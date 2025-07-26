import { Router } from 'express';
import itemController from '../controllers/itemController.js';
import validarToken from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = Router();

router.get('/items/me', validarToken, itemController.getMyItems);

router.post(
    '/items',
    validarToken,
    upload.single('imagem'),
    itemController.create,
);
router.get('/items', itemController.getAll);
router.get('/items/:id', itemController.getById);
router.put('/items/:id', validarToken, itemController.update);
router.delete('/items/:id', validarToken, itemController.remove);

export default router;
