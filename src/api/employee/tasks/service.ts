import { IEmployeeToPayment } from '../../../interfaces';
import { Tasks, Payment } from '../../../models';
import { Op } from 'sequelize';
import moment from 'moment';
import { appointments as tasksMock } from './tasks.mock';

const selects = {
  include: [{ model: Payment, as: 'payment' }]
};

class EmployeeTasksService {
  public async getAll(employeeId: string): Promise<any> {
    const tasks = await Tasks.findAll({ where: { employeeId }, ...selects });
    return tasksMock;
  }

  public async updateStatus(employeeId: string, taskId: string, status: string): Promise<IEmployeeToPayment | boolean> {
    const model = await Tasks.findOne({ where: { paymentId: taskId, employeeId } });
    if (model) {
      return model.update({ status });
    }
    return false;
  }

  public async getAllFutureTasks(employeeId: string): Promise<any> {
    const currentDate: Date = new Date();
    const nextWeekDate: Date = new Date(moment().add(7, 'days').format());
    const tasks = await Tasks.findAll({
      where: {
        employeeId,
        startDate: {
          [Op.gte]: currentDate,
          [Op.lte]: nextWeekDate
        }
      },
      ...selects
    });

    return tasksMock;
  }
}

export default new EmployeeTasksService();
