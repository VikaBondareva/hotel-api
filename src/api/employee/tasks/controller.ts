import service from './service';
import { Request, Response, NextFunction } from 'express';

class EmployeeTasksController {
  public async get(req: Request, res: Response): Promise<void> {
    const employeeId = req.params.id;
    const result = await service.getAll(employeeId);

    res.status(200).json(result);
  }

  public async updateStatus(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    const employeeId = req.params.id;
    const result = await service.updateStatus(employeeId, taskId, req.body.status);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }
}

export default new EmployeeTasksController();
