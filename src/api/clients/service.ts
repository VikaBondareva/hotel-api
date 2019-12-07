import { IClient } from '../../interfaces';
import { Client } from '../../models';

class ClientService {
  public async create(data: any): Promise<IClient> {
    return Client.create(data);
  }

  public async getAll(): Promise<IClient[]> {
    return Client.findAll();
  }

  public async getById(id: string): Promise<IClient> {
    return Client.findOne({ where: { additionId: id }, raw: true });
  }

  public async updateStatus(additionId: string, data: any): Promise<IClient | boolean> {
    const addition = await Client.findOne({ where: { additionId } });
    if (addition) {
      return addition.update(data);
    }
    return false;
  }
  public async remove(additionId: string): Promise<boolean> {
    const result = await Client.destroy({ where: { additionId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new ClientService();
