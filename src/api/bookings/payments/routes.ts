import { Router } from 'express';
import controller from './controller';

const router = Router({ mergeParams: true });

router.get('/', controller.get);
router.get('/:paymentId', controller.getById);
router.patch('/:paymentId', controller.updateStatus);
router.delete('/:paymentId', controller.remove);

export const paymentRoutes = router;
