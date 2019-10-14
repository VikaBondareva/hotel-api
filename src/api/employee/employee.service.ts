import faker from 'faker';
import { EmployeeRepository as Employee } from '../../repositories';
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
import { Transport, JsonTokens } from '../../utils';
import { config } from '../../config';
class EmployeeService {
  public async register(data: IEmployeeFieldsToRegister): Promise<Error | { employeeId: number }> {
    try {
      const isExist = await Employee.findOne({
        where: { $or: [{ email: data.email }, { phoneNumber: data.phoneNumber }] }
      });
      if (isExist) return new Error(logicErr.userIsAlreadyRegistered);

      const employee = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: faker.internet.password(),
        status: StatusUsers.NeedChangePassword
      };

      const newEmployee = await Employee.create(employee);
      return {
        employeeId: newEmployee.employeeId
      };
    } catch (error) {
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

      return {
        user: employee,
        tokens: {
          ...tokens,
          access_expires_in: dateNow.getTime()
        }
      };
    } catch (error) {
      return new Error(technicalErr.databaseCrash);
    }
  }

  //   public async getCurrent(data: IEmployeeModel): Promise<Error | IUser> {
  //     try {
  //       if (!data) return new Error(logicErr.notFoundUser);
  //       const dataObj = data.toObject();
  //       return dataObj;
  //     } catch (error) {
  //       return new Error(technicalErr.databaseCrash);
  //     }
  //   }

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
