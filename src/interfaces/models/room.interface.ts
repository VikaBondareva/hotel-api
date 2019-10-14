import { Model } from 'sequelize';

export interface IRoom extends Model {
  roomId: number;
  floor: number;
  countRooms: number;
  countDoubleBeds: number;
  countSingleBeds: number;
  totalBeds: number;
  toilets: number;
  price: number;
  status: string;
}

export interface IRoomService extends Document {
  name: string;
  price: number;
}

export interface IRoomCreate {
  roomId: number;
  floor: number;
  countRooms: number;
  countDoubleBeds: number;
  countSingleBeds: number;
  toilets: number;
  price: number;
  status: string;
}
