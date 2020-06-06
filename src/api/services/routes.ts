import { Router } from 'express';
import controller from './controller';
import passport from 'passport';
import { validation } from '../../middleware';
import { serviceCreate, serviceUpdate } from '../../validation';
import { scheduleRouter } from './schedule';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', passport.authenticate('jwt', { session: false }), validation(serviceCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.put('/:id', passport.authenticate('jwt', { session: false }), validation(serviceUpdate), controller.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

router.use('/:id/schedules', passport.authenticate('jwt', { session: false }), scheduleRouter);

export const serviceRouter = router;
