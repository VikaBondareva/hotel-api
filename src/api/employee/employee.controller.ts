import { Request, Response } from 'express';
import EmployeeService from './employee.service';
import { Transport, JsonTokens } from '../../utils';
import { Error, EmailService } from '../../interfaces';
import { Roles } from '../../enums';
import { logicErr } from '../../errors';

class EmployeeController {
  private static _transporter: Transport = new Transport(new EmailService());

  public create(req: Request, res: Response): void {
    const origin = req.headers.origin;

    EmployeeService.register(req.body).then(result => {
      if (!(result instanceof Error)) {
        const token: string = JsonTokens.generateIdentifiedToken(result.employeeId, Roles.Employee);
        EmployeeController._transporter.sendLinkToChangePassword(origin, req.body.email, token, req.body.name);
        res.status(201).json({ success: true });
      } else res.status(result.status).json({ message: result.message, success: false });
    });
  }

  public login(req: Request, res: Response): void {
    EmployeeService.login(req.body).then(result =>
      !(result instanceof Error)
        ? res.status(200).json(result)
        : res.status(result.status).json({ message: result.message, success: false })
    );
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
