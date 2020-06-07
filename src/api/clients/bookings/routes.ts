import { Router } from 'express';
import controller from './controller';
import passport from 'passport';

const router = Router({ mergeParams: true });

router.get('/', passport.authenticate('jwt', { session: false }), controller.get);
router.get('/:bookingId', passport.authenticate('jwt', { session: false }), controller.getById);
router.put('/:bookingId', passport.authenticate('jwt', { session: false }), controller.update);
router.delete('/:bookingId', passport.authenticate('jwt', { session: false }), controller.remove);

export const bookingRouter = router;
