import { Router } from 'express';
import controller from './controller';
import { validation } from '../../middleware';
import { serviceCreate, serviceUpdate } from '../../validation';
import { scheduleRouter } from './schedule';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', validation(serviceCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.put('/:id', validation(serviceUpdate), controller.update);
router.delete('/:id', controller.remove);

router.use('/:id/schedules', scheduleRouter);

export const serviceRouter = router;
