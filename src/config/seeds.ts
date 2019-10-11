import employeeSeeds from '../seeds/employee.seeds';
import { config, logger } from '../config';
import { EmployeeRepository } from '../repositories';

export default async function(): Promise<Error | void> {
  const employeeCount = await EmployeeRepository.countDocuments();
  if (config.app.environment !== 'test') {
    if (employeeCount === 0) {
      await EmployeeRepository.create(employeeSeeds[0])
        .then(() => {
          logger.info('Employee seeded');
        })
        .catch((err: any): any => logger.warn(err));
    }
  }
}
