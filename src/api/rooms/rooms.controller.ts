import service from './rooms.service';
import { Request, Response } from 'express';

class RoomController {
  public async create(req: Request, res: Response): Promise<void> {
    const result = await service.create(req.body);

    if (result) res.status(201).json(result);
    else res.sendStatus(400);
  }

  public async get(req: Request, res: Response): Promise<void> {
    const result = await service.getAll();

    res.status(200).json(result);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const result = await service.getById(req.params.id);

    res.status(200).json(result);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const result = await service.update(req.params.id, req.body);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const result = await service.remove(req.params.id);

    res.status(200).json(result);
  }
}

export default new RoomController();
