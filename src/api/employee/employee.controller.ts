import { Request, Response, text } from 'express';
import EmployeeService from './employee.service';
import authService, { logout } from '../../services/auth';
import { Transport, JsonTokens } from '../../utils';
import { Error, EmailService } from '../../interfaces';
import { Roles } from '../../enums';
import { logicErr } from '../../errors';
import { Employee } from '../../models';

class EmployeeController {
  private static _transporter: Transport = new Transport(new EmailService());

  public create(req: Request, res: Response): void {
    const origin = req.headers.origin;

    EmployeeService.register(req.body).then((result) => {
      if (!(result instanceof Error)) {
        const token: string = JsonTokens.generateIdentifiedToken(result.employeeId, Roles.Employee);
        EmployeeController._transporter.sendLinkToChangePassword(origin, req.body.email, token, req.body.name);
        res.status(201).json({ success: true });
      } else res.status(result.status).json({ message: result.message, success: false });
    });
  }

  public async loginEmployee(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const authServicePrimary = authService({ model: Employee });
      const { token } = await authServicePrimary.login({ email, password });
      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async activateEmployee(req: Request, res: Response, next: any): Promise<void> {
    try {
      const { resetPasswordToken } = req.query;
      const { password, repeatedPassword } = req.body;
      if (password !== repeatedPassword) throw 'Wrong Password';
      await authService({ model: Employee }).activateAccount({
        resetPasswordToken,
        password
      });
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }

  public async logoutEmployee(req: any, res: any, next: any): Promise<void> {
    try {
      await logout(req.query.accessToken);
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }

  public async requestResetPassword(req: any, res: any, next: any): Promise<void> {
    try {
      const { email } = req.body;
      const token = await authService({ model: Employee }).requestResetPassword({
        email
      });
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }

  public getCurrent(req: any, res: Response): void {
    if (!req.user) {
      res.status(logicErr.notFoundUser.code).json({ message: logicErr.notFoundUser.msg, success: false });
    } else {
      const { password, ...user } = req.user;
      res.status(200).json({ user });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const result = await EmployeeService.getAll();

    res.status(200).json(result);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const result = await EmployeeService.getById(req.params.id);

    res.status(200).json(result);
  }
}

export const employeeController = new EmployeeController();
