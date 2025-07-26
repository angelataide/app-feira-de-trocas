import { Router } from 'express';
import propostaController from '../controllers/propostaController.js';
import validarToken from '../middleware/authMiddleware.js';

const router = Router();
router.use(validarToken);

router.get('/propostas', propostaController.getAll);
router.post('/propostas', propostaController.create);

router.post('/propostas/:id/mensagens', propostaController.addMessage);
router.get('/propostas/:id/mensagens', propostaController.getMessages);

router.patch('/propostas/:id/aceitar', propostaController.aceitar);
router.patch('/propostas/:id/recusar', propostaController.recusar);

export default router;
