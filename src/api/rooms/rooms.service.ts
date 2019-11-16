import { IRoomCreate, IRoom } from '../../interfaces';
import { Rooms } from '../../models';
import { StatusService } from '../../enums';

class RoomService {
  public async create(data: IRoomCreate): Promise<IRoom> {
    return Rooms.create({ ...data, status: StatusService.Available });
  }

  public async getAll(): Promise<IRoom[]> {
    return Rooms.findAll();
  }

  public async getById(id: string): Promise<IRoom> {
    return Rooms.findOne({ where: { roomId: id }, raw: true });
  }

  public async update(_id: string, data: IRoomCreate): Promise<IRoom | boolean> {
    const room = await Rooms.findOne({ where: { roomId: _id } });
    if (room) {
      return room.update(data);
    }
    return false;
  }
  public async remove(roomId: string): Promise<boolean> {
    const result = await Rooms.destroy({ where: { roomId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new RoomService();
