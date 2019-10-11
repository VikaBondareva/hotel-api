import { Client } from '../models';

export class ClientRepository {
  public static getFullName = (client: Client) => {
    return `${client.name} ${client.surname}`;
  };

  public static remove = async (options: any) => {
    return await Client.destroy(options);
  };

  public static create = async (params: any) => {
    return await Client.create<Client>(params);
  };

  public static findById = async (id: string) => {
    return await Client.findOne<Client>();
  };
}
