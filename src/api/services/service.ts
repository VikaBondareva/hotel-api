import { IService, IServiceCreate, IServiceUpdate } from '../../interfaces';
import { Services, Schedule, Rooms } from '../../models';
import { StatusService } from '../../enums/status.enums';

class ServicesHotel {
  public async create(data: IServiceCreate): Promise<IService | boolean> {
    const room = await Rooms.findOne({ where: { roomId: data.numberOfRoom, floor: data.floor } });
    if (room) return false;
    return Services.create({ ...data, status: StatusService.Available });
  }

  public async getAll(): Promise<IService[]> {
    return Services.findAll({
      include: [{ model: Schedule, as: 'schedules' }]
    });
  }

  public async getById(id: string): Promise<IService> {
    return Services.findOne({ where: { serviceId: id }, include: [{ model: Schedule, as: 'schedules' }] });
  }

  public async update(serviceId: string, data: IServiceUpdate): Promise<IService | boolean> {
    const room = await Rooms.findOne({ where: { roomId: data.numberOfRoom, floor: data.floor } });
    if (room) return false;
    const model = await Services.findOne({ where: { serviceId } });
    if (model) {
      return model.update(data);
    }
    return false;
  }

  public async remove(serviceId: string): Promise<boolean> {
    const result = await Services.destroy({ where: { serviceId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new ServicesHotel();
