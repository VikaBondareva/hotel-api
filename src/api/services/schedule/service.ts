import { ISchedule, IScheduleCreate } from '../../../interfaces';
import { Services, Schedule } from '../../../models';

class ServicesHotel {
  public async create(serviceId: string, data: IScheduleCreate): Promise<ISchedule | boolean> {
    const service = await Services.findOne({ where: { serviceId } });
    if (!service) return false;
    return Schedule.create({ ...data, serviceId });
  }

  public async getAll(serviceId: string): Promise<ISchedule[]> {
    return Schedule.findAll({
      where: { serviceId }
    });
  }

  public async update(scheduleId: string, serviceId: string, data: IScheduleCreate): Promise<ISchedule | boolean> {
    const model = await Schedule.findOne({ where: { scheduleId, serviceId } });
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
