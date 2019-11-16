import faker from 'faker';
import { EmployeeRepository as Employee } from '../../repositories';
import { Op } from 'sequelize';
import {
  IEmployeeFieldsToRegister,
  Error,
  IEmployeeResponseLogin,
  IEmployeeToLogin,
  ITokens,
  IEmployeeResponse,
  IEmployee
} from '../../interfaces';
import { logicErr, technicalErr } from '../../errors';
import { Roles, StatusUsers } from '../../enums';
import { JsonTokens } from '../../utils';
import { config } from '../../config';
class EmployeeService {
  public async register(data: IEmployeeFieldsToRegister): Promise<Error | { employeeId: number; password: string }> {
    try {
      const isExist = await Employee.findOne({
        where: { [Op.or]: [{ email: data.email }, { phoneNumber: data.phoneNumber }] }
      });
      if (isExist) return new Error(logicErr.userIsAlreadyRegistered);

      const password = faker.internet.password();
      const employee = {
        ...data,
        password,
        status: StatusUsers.NeedChangePassword
      };

      const newEmployee = await Employee.create(employee);
      return {
        employeeId: newEmployee.employeeId,
        password
      };
    } catch (error) {
      console.log(error);

      return new Error(technicalErr.databaseCrash);
    }
  }

  public async login(data: IEmployeeToLogin): Promise<any | Error> {
    try {
      const employee = await Employee.findOne({ where: { email: data.email }, raw: true });
      if (!employee) return new Error(logicErr.incorrectDataToLogin);

      if (employee.status === StatusUsers.Blocking) return new Error(logicErr.userBlocked);

      let success = await Employee.comparePassword(employee.password, data.password);
      if (!success) return new Error(logicErr.incorrectDataToLogin);

      await JsonTokens.deleteIdentifiedToken(employee.employeeId);
      const tokens: ITokens = JsonTokens.generationTokens(employee.employeeId, Roles.Employee);
      let dateNow: Date = new Date();
      dateNow.setSeconds(dateNow.getSeconds() + config.jwt.accessExpiration);

      const { password, ...user } = employee;
      return {
        user,
        tokens: {
          ...tokens,
          access_expires_in: dateNow.getTime()
        }
      };
    } catch (error) {
      return new Error(technicalErr.databaseCrash);
    }
  }

  // public async changeFirstPassword(data: { newPassword: string }, employee: IEmployee): Promise<Error | boolean> {
  //   try {
  //     if (!employee) return new Error(logicErr.notFoundUser);

  //     employee.status = StatusUsers.Active;
  //     employee.password = data.newPassword;
  //     await employee.save();

  //     return true;
  //   } catch {
  //     return new Error(technicalErr.databaseCrash);
  //   }
  // }
}
export default new EmployeeService();
