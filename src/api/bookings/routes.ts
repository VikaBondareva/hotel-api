import { Router } from 'express';
import controller from './controller';
import passport from 'passport';
import { paymentRoutes } from './payments';

const router = Router({ mergeParams: true });

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.get('/', passport.authenticate('jwt', { session: false }), controller.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.updateStatus);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

router.use('/:id/payments', passport.authenticate('jwt', { session: false }), paymentRoutes);

export const bookingRouter = router;
