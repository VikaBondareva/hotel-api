import { IService, IServiceCreate, IServiceUpdate } from '../../interfaces';
import { Services } from '../../models';
import { StatusService } from '../../enums/status.enums';

class ServicesHotel {
  public async create(data: IServiceCreate): Promise<IService> {
    return Services.create({ ...data, status: StatusService.Available });
  }

  public async getAll(): Promise<IService[]> {
    return Services.findAll();
  }

  public async getById(id: string): Promise<IService> {
    return Services.findOne({ where: { serviceId: id }, raw: true });
  }

  public async update(serviceId: string, data: IServiceUpdate): Promise<IService | boolean> {
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
