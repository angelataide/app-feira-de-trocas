import { Router } from 'express';
import propostaController from '../controllers/propostaController.js';

const router = Router();

router.post('/proposals', propostaController.create);
router.patch('/proposals/:id/respond', propostaController.responder); // PATCH é ideal para atualizações parciais

export default router;
