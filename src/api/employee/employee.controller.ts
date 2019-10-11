import { Request, Response } from 'express';
import EmployeeService from './employee.service';
import { Transport, JsonTokens } from '../../utils';
import { Error, EmailService } from '../../interfaces';
import { Roles } from '../../enums';

class EmployeeController {
  private _transporter: Transport = new Transport(new EmailService());

  public postRegister(req: Request, res: Response): void {
    const origin = req.headers.origin;

    EmployeeService.register(req.body).then(result => {
      if (!(result instanceof Error)) {
        const token: string = JsonTokens.generateIdentifiedToken(result.employeeId, Roles.Employee);

        this._transporter.sendLinkToChangePassword(origin, req.body.email, token, req.body.name);
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

  //   public getCurrent(req: Request, res: Response): void {
  //     EmployeeService.getCurrent(req.user).then(result =>
  //       !(result instanceof Error)
  //         ? res.status(200).json({ user: result })
  //         : res.status(result.status).json({ message: result.message, success: false })
  //     );
  //   }

  // public changePassword(req: Request, res: Response): void {
  //   EmployeeService.changeFirstPassword(req.body, req.user).then(result =>
  //     !(result instanceof Error)
  //       ? res.status(200).json({ success: true })
  //       : res.status(result.status).json({ message: result.message, success: false })
  //   );
  // }
}

export const employeeController = new EmployeeController();
