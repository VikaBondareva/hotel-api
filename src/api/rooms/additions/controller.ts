import { Request, Response, NextFunction } from 'express';
import { AdditionsRooms } from '../../../models';

class AdditionRoomController {
  public async updateStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    const additionId = req.params.additionId;
    const roomId = req.params.id;
    const status = req.body.status;

    const addition = await AdditionsRooms.findOne({ where: { additionId, roomId } });
    if (addition) {
      await addition.update({
        status
      });
      res.sendStatus(200);
    } else res.sendStatus(400);
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const additionId = req.params.additionId;
    const roomId = req.params.id;
    const addition = await AdditionsRooms.destroy({ where: { additionId, roomId } });
    if (addition) {
      res.sendStatus(200);
    } else res.sendStatus(400);
  }
}

export default new AdditionRoomController();
