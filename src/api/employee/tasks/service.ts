import { IEmployeeToPayment } from '../../../interfaces';
import { EmployeeToPayment, Payment } from '../../../models';

const selects = {
  include: [{ model: Payment, as: 'payment' }]
};

class EmployeeTasksService {
  public async getAll(employeeId: string): Promise<IEmployeeToPayment[]> {
    return EmployeeToPayment.findAll({ where: { employeeId }, ...selects });
  }

  public async updateStatus(employeeId: string, taskId: string, status: string): Promise<IEmployeeToPayment | boolean> {
    const model = await EmployeeToPayment.findOne({ where: { paymentId: taskId, employeeId } });
    if (model) {
      return model.update({ status });
    }
    return false;
  }
}

export default new EmployeeTasksService();
