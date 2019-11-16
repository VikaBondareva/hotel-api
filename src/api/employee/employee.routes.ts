import { employeeController } from './employee.controller';
import { Router } from 'express';
import { validation, permit } from '../../middleware';
import { validateRegisterEmployee } from '../../validation';
import { Roles } from '../../enums';

const router = Router();

router.post('/', validation(validateRegisterEmployee), employeeController.create);
router.post('/login', employeeController.login);
// router.get('/current', permit([Roles.Employee]), employeeController.getCurrent);
router.get('/current', employeeController.getCurrent);

export const employeeRouter = router;
