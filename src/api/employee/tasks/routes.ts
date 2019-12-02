import { Router } from 'express';
import controller from './controller';

const router = Router({ mergeParams: true });

router.get('/', controller.get);
router.patch('/:taskId', controller.updateStatus);

export const tasksRouter = router;
