import { Router } from 'express';
import controller from './controller';
import passport from 'passport';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.get);

export const activitiesRouter = router;
