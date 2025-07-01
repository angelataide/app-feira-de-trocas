import { Router } from 'express';

import itemController from '../controllers/itemController.js';

const router = Router();

router.post('/items', itemController.create);

router.get('/items', itemController.getAll);

router.get('/items/:id', itemController.getById);

router.put('/items/:id', itemController.update);

router.delete('/items/:id', itemController.remove);

export default router;
