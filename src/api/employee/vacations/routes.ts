import { Router } from 'express';
import controller from './controller';
import passport from 'passport';

const router = Router({ mergeParams: true });

router.get('/', passport.authenticate('jwt', { session: false }), controller.getByEmployeeCurrent);
router.post('/', passport.authenticate('jwt', { session: false }), controller.createRequestVacation);

export const vacationRoutes = router;
