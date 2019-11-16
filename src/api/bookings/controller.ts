import service from './service';
import { Request, Response, NextFunction } from 'express';

class BookingController {
  public async get(req: Request, res: Response): Promise<void> {
    const isPayments = req.query.payments;
    const result = await service.getAll(isPayments);

    res.status(200).json(result);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const result = await service.getById(req.params.id);

    res.status(200).json(result);
  }

  public async updateStatus(req: Request, res: Response): Promise<void> {
    const result = await service.updateStatus(req.params.id, req.body);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const result = await service.remove(req.params.id);

    res.status(200).json(result);
  }
}

export default new BookingController();
