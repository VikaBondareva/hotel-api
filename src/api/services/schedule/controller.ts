import service from './service';
import { Request, Response, NextFunction } from 'express';

class AdditionController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const serviceId = req.params.id;
      const result = await service.create(serviceId, req.body);

      if (result) res.status(201).json(result);
      else res.sendStatus(400);
    } catch (err) {
      next(err);
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    const serviceId = req.params.id;
    const result = await service.getAll(serviceId);

    res.status(200).json(result);
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const scheduleId = req.params.scheduleId;
      const serviceId = req.params.id;
      const result = await service.update(scheduleId, serviceId, req.body);

      if (result) res.status(200).json(result);
      else res.sendStatus(400);
    } catch (err) {
      next(err);
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const result = await service.remove(req.params.id);

    res.status(200).json(result);
  }
}

export default new AdditionController();
