import service from './service';
import { Request, Response, NextFunction } from 'express';

class EmployeeScheduleController {
  public async get(req: Request, res: Response): Promise<void> {
    const bookingId = req.params.id;
    const result = await service.getAll(bookingId);

    res.status(200).json(result);
  }
}

export default new EmployeeScheduleController();
