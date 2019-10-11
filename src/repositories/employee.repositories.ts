import { Employee } from '../models';
import bcrypt from 'bcrypt';

export class EmployeeRepository {
  public static getFullName = (employee: Employee) => {
    return `${employee.name} ${employee.surname}`;
  };

  public static comparePassword = (password: string, candidatePassword: string) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, password, (err, success) => {
        if (err) return reject(err);
        return resolve(success);
      });
    });
  };

  public static countDocuments = async () => {
    return await Employee.count();
  };

  public static remove = async (options: any) => {
    return await Employee.destroy(options);
  };

  public static create = async (params: any) => {
    return await new Employee(params).save();
  };

  public static findById = async (id: string) => {
    return await Employee.findOne<Employee>({ where: { employeeId: id } });
  };

  public static findOne = async (options: any) => {
    return await Employee.findOne<Employee>(options);
  };
}
