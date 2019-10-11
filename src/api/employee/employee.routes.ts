import { employeeController } from './employee.controller';
import { Router } from 'express';
import { validation } from '../../middleware';
import { validateRegisterEmployee } from '../../validation';

const router = Router();

router.post('/', validation(validateRegisterEmployee), employeeController.postRegister);
router.post('/login', employeeController.login);

export const employeeRouter = router;
