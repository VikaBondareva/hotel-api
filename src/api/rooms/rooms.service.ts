import { Error, IRoomCreate, IRoom } from '../../interfaces';
import { Rooms } from '../../models';
import { StatusService } from '../../enums';
import { logicErr } from '../../errors';

class RoomService {
  public async create(data: IRoomCreate): Promise<Error | number> {
    try {
      const room = await Rooms.create({ ...data, status: StatusService.Available });
      return room.roomId;
    } catch {
      return new Error(logicErr.dataAlreadyExist);
    }
  }

  //   public async getAll(queries: { page?: string; perPage?: string }): Promise<PaginateResult<IRoom>> {
  //     const options = {
  //       page: parseInt(queries.page, 10) || 1,
  //       limit: parseInt(queries.perPage, 10) || 10
  //     };
  //     const rooms = await Rooms.paginate({}, options);
  //     return rooms;
  //   }

  public async getById(id: string): Promise<IRoom> {
    const room = await Rooms.findOne({ where: { roomId: id }, raw: true });
    return room;
  }

  //   public async update(_id: string, data: IRoomCreate): Promise<boolean> {
  //     try {
  //       await Rooms.updateOne(
  //         { _id },
  //         {
  //           ...data
  //         }
  //       );
  //       return true;
  //     } catch (err) {
  //       throw err;
  //     }
  //   }
}

export default new RoomService();
