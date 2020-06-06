import { employeeController } from './employee.controller';
import { Router } from 'express';
import { validation } from '../../middleware';
import { validateRegisterEmployee } from '../../validation';
import loginData from '../../validation/loginData.validation';
import { tasksRouter } from './tasks';
import { vacationRoutes } from './vacations';
import { scheduleRoutes } from './schedules';
import passport from 'passport';

const router = Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validation(validateRegisterEmployee),
  employeeController.create
);
router.post('/login', validation(loginData), employeeController.loginEmployee);
router.post('/logout', employeeController.logoutEmployee);
router.post('/confirm', employeeController.activateEmployee);
router.post('/forgot-password', employeeController.requestResetPassword);
// router.get('/current', permit([Roles.Employee]), employeeController.getCurrent);
router.get('/current', passport.authenticate('jwt', { session: false }), employeeController.getCurrent);
router.get('/', passport.authenticate('jwt', { session: false }), employeeController.getAll);
router.get('/:id', passport.authenticate('jwt', { session: false }), employeeController.getById);

router.use('/:id/tasks', passport.authenticate('jwt', { session: false }), tasksRouter);
router.use('/:id/schedules', passport.authenticate('jwt', { session: false }), scheduleRoutes);
router.use('/current/vacations', vacationRoutes);

export const employeeRouter = router;
