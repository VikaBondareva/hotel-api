import { Router } from 'express';
import controller from './controller';
import { validation } from '../../middleware';
import { bookingCreate } from '../../validation';
import { bookingRouter } from './bookings';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', validation(bookingCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.patch('/:id', controller.updateStatus);
router.delete('/:id', controller.remove);

router.use('/:id/booking', bookingRouter);

export const clientRouter = router;
