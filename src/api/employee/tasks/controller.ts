import service from './service';
import { Response } from 'express';

class EmployeeTasksController {
  public async get(req: any, res: Response): Promise<void> {
    const employeeId = req.user.employeeId;
    const result = await service.getAll(employeeId);

    res.status(200).json(result);
  }

  public async getFutureTasks(req: any, res: Response): Promise<void> {
    const employeeId = req.user.employeeId;
    const result = await service.getAllFutureTasks(employeeId);

    res.status(200).json(result);
  }

  public async updateStatus(req: any, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    const employeeId = req.user.employeeId;
    const result = await service.updateStatus(employeeId, taskId, req.body.status);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }
}

export default new EmployeeTasksController();
