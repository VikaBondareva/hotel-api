import { Router } from 'express';
import controller from './controller';
import { paymentRoutes } from './payments';

const router = Router({ mergeParams: true });

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.patch('/:id', controller.updateStatus);
router.delete('/:id', controller.remove);

router.use('/:id/payments', paymentRoutes);

export const bookingRouter = router;
