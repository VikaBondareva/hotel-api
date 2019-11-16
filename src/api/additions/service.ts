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
    return Additions.findOne({ where: { additionsId: id }, raw: true });
  }

  public async update(additionsId: string, data: IAdditionCreate): Promise<IAddition | boolean> {
    const addition = await Additions.findOne({ where: { additionsId } });
    if (addition) {
      return addition.update(data);
    }
    return false;
  }
  public async remove(additionsId: string): Promise<boolean> {
    const result = await Additions.destroy({ where: { additionsId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new RoomService();
