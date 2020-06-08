import { IRoomCreate, IRoom } from '../../interfaces';
import { Rooms, Additions, AdditionsRooms } from '../../models';
import { StatusService } from '../../enums';

class RoomService {
  public async create(data: IRoomCreate): Promise<IRoom> {
    const totalBeds = data.countDoubleBeds + data.countSingleBeds;
    return Rooms.create({ ...data, totalBeds, status: StatusService.Available });
  }

  public async getAll(): Promise<IRoom[]> {
    const rooms = await Rooms.findAll({
      include: [{ model: Additions, as: 'additions' }]
    });

    return rooms.map((room: any): any => {
      return this.convertRoom(room.get({ plain: true }));
    });
  }

  public async getById(id: string): Promise<IRoom> {
    const room = await Rooms.findOne({
      where: { roomId: id },
      include: [{ model: Additions, as: 'additions' }]
    });

    return this.convertRoom(room.get({ plain: true }));
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

  private convertRoom(room: any) {
    return {
      ...room,
      additions: room.additions.map((record: any) => {
        const addition = {
          name: record.name,
          price: record.price,
          additionId: record.additionId,
          status: record.AdditionsRooms.status
        };

        return addition;
      })
    };
  }
}

export default new RoomService();
