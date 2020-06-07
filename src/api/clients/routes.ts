import { Router } from 'express';
import controller from './controller';
import { validation } from '../../middleware';
import { bookingCreate } from '../../validation';
import { bookingRouter } from './bookings';
import passport from 'passport';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', passport.authenticate('jwt', { session: false }), validation(bookingCreate), controller.create);
router.get('/', passport.authenticate('jwt', { session: false }), controller.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.updateStatus);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

router.use('/:id/bookings', bookingRouter);

export const clientRouter = router;
