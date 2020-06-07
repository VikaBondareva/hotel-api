import service from './service';
import { Request, Response, NextFunction } from 'express';

class BookingControllerClient {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await service.create(req.body);

      if (result) res.status(201).json(result);
      else res.sendStatus(400);
    } catch (err) {
      next(err);
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    const clientId = req.params.id;
    // if (isPrice) result = await service.getAllPrice(clientId);
    const result = await service.getAll(clientId);

    res.status(200).json(result);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const clientId = req.params.id;
    const bookingId = req.params.bookingId;
    const result = await service.getById(bookingId, clientId);

    res.status(200).json(result);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const clientId = req.params.id;
    const bookingId = req.params.bookingId;
    const result = await service.update(bookingId, clientId, req.body);

    if (result) res.status(200).json(result);
    else res.sendStatus(400);
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const result = await service.remove(req.params.id);

    res.status(200).json(result);
  }
}

export default new BookingControllerClient();
