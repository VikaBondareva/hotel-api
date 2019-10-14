import { Router } from 'express';
import roomController from './rooms.controller';
import { validation } from '../../middleware';
import { roomCreate } from '../../validation';
import { permit } from '../../middleware';
import { Roles } from '../../enums';

const router = Router();

router.post('/', permit([Roles.Employee]), validation(roomCreate), roomController.create);
// router.get('/', roomController.ge);
router.get('/:id', roomController.getById);
// router.put('/:id', permit([Roles.Employee]), validation(roomCreate), roomController.update);

export const roomRouter = router;
