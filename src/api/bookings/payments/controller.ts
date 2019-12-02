import service from './service';
import { Request, Response, NextFunction } from 'express';

class BookingController {
  public async get(req: Request, res: Response): Promise<void> {
    const bookingId = req.params.id;
    const result = await service.getAll(bookingId);

    res.status(200).json(result);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const paymentId = req.query.paymentId;
    const bookingId = req.params.id;
    const result = await service.getById(bookingId, paymentId);

    res.status(200).json(result);
  }

  public async updateStatus(req: Request, res: Response): Promise<void> {
    const paymentId = req.query.paymentId;
    const bookingId = req.params.id;
    const result = await service.updateStatus(bookingId, paymentId, req.body);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const paymentId = req.query.paymentId;
    const bookingId = req.params.id;
    const result = await service.remove(bookingId, paymentId);

    res.status(200).json(result);
  }
}

export default new BookingController();
