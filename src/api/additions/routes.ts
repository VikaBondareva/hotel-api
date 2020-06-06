import { Router } from 'express';
import controller from './controller';
import { validation } from '../../middleware';
import passport from 'passport';
import { additionCreate } from '../../validation';

const router = Router();

// router.post('/', permit([Roles.Employee]), validation(roomCreate), controller.create);
router.post('/', passport.authenticate('jwt', { session: false }), validation(additionCreate), controller.create);
router.get('/', passport.authenticate('jwt', { session: false }), controller.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), controller.update);
router.put('/:id', passport.authenticate('jwt', { session: false }), validation(additionCreate), controller.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

export const additionRouter = router;
