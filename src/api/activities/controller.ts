import { Request, Response } from 'express';
import Sequelize from 'sequelize';
import { sequelize } from '../../config/databaseConnect';

class ActivitiesController {
  public async get(req: Request, res: Response): Promise<void> {
    const activeClients = await sequelize.query(`select * from ClientsActive`, { type: Sequelize.QueryTypes.SELECT });
    const populateRooms = await sequelize.query(`SELECT roomId ,price ,bookingCount FROM PopularRooms`, {
      type: Sequelize.QueryTypes.SELECT
    });
    const badClients = await sequelize.query(`select * from ComplaintsAboutClients`, {
      type: Sequelize.QueryTypes.SELECT
    });

    const paymentToday = await sequelize.query(`select top (100) * from PaymentToday`, {
      type: Sequelize.QueryTypes.SELECT
    });

    const featureBookings = await sequelize.query(`select top (100) * from Feature_Bookigns_View`, {
      type: Sequelize.QueryTypes.SELECT
    });

    res.status(200).json({ activeClients, populateRooms, badClients, paymentToday, featureBookings });
  }
}

export default new ActivitiesController();
