import { Router } from 'express';
import controller from './controller';
import passport from 'passport';

const router = Router({ mergeParams: true });

router.get('/', passport.authenticate('jwt', { session: false }), controller.get);
router.get('/future', passport.authenticate('jwt', { session: false }), controller.getFutureTasks);
router.patch('/:taskId', passport.authenticate('jwt', { session: false }), controller.updateStatus);

export const tasksRouter = router;
