import { employeeController } from './employee.controller';
import { Router } from 'express';
import { validation } from '../../middleware';
import { validateRegisterEmployee } from '../../validation';
import { tasksRouter } from './tasks';

const router = Router();

router.post('/', validation(validateRegisterEmployee), employeeController.create);
router.post('/login', employeeController.login);
// router.get('/current', permit([Roles.Employee]), employeeController.getCurrent);
router.get('/current', employeeController.getCurrent);
router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getById);

router.use('/:id/tasks', tasksRouter);

export const employeeRouter = router;
