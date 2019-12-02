import { IAddition, IAdditionCreate } from '../../interfaces';
import { Additions } from '../../models';

class RoomService {
  public async create(data: IAdditionCreate): Promise<IAddition> {
    return Additions.create(data);
  }

  public async getAll(): Promise<IAddition[]> {
    return Additions.findAll();
  }

  public async getById(id: string): Promise<IAddition> {
    return Additions.findOne({ where: { additionId: id }, raw: true });
  }

  public async update(additionId: string, data: IAdditionCreate): Promise<IAddition | boolean> {
    const addition = await Additions.findOne({ where: { additionId } });
    if (addition) {
      return addition.update(data);
    }
    return false;
  }
  public async remove(additionId: string): Promise<boolean> {
    const result = await Additions.destroy({ where: { additionId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new RoomService();
