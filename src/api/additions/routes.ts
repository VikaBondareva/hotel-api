import { Router } from 'express';
import controller from './controller';
import { validation } from '../../middleware';
import { roomCreate } from '../../validation';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', validation(roomCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.put('/:id', validation(roomCreate), controller.update);
router.delete('/:id', controller.remove);

export const additionRouter = router;
