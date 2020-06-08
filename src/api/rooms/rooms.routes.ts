import { Router } from 'express';
import controller from './rooms.controller';
import { validation } from '../../middleware';
import { roomCreate, roomEdit } from '../../validation';
import { scheduleRouter } from './additions';
import passport from 'passport';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', passport.authenticate('jwt', { session: false }), validation(roomCreate), controller.create);
router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.put('/:id', passport.authenticate('jwt', { session: false }), validation(roomEdit), controller.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

router.use('/:id/additions', passport.authenticate('jwt', { session: false }), scheduleRouter);

export const roomRouter = router;
