import { Router } from 'express';
import userController from '../controllers/userController.js';
import validarToken from '../middleware/authMiddleware.js';

const router = Router();

router.post('/users', userController.create);
router.get('/users', validarToken, userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/login', userController.loginUser);
export default router;
