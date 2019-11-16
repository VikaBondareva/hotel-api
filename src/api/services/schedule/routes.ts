import { Router } from 'express';
import controller from './controller';
import { validation } from '../../../middleware';
import { scheduleCreate } from '../../../validation';

const router = Router({ mergeParams: true });

router.post('/', validation(scheduleCreate), controller.create);
router.get('/', controller.get);
router.put('/:scheduleId', validation(scheduleCreate), controller.update);
router.delete('/:scheduleId', controller.remove);

export const scheduleRouter = router;
