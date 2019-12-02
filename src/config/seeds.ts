import { employees, positions } from '../seeds/employee.seeds';
import { config, logger } from '../config';
import { Positions } from '../models';
import { EmployeeRepository } from '../repositories';

export default async function(): Promise<Error | void> {
  const employeeCount = await EmployeeRepository.countDocuments();
  let position = await Positions.findOne({ where: { positionName: 'administrator' } });
  if (!position) {
    await Positions.create(positions[0]);
    position = await Positions.findOne({ where: { positionName: 'administrator' } });
  }
  if (config.app.environment !== 'test') {
    if (employeeCount === 0) {
      await EmployeeRepository.create({ ...employees[0], positionId: position.positionId })
        .then(() => {
          logger.info('Database seeded');
        })
        .catch((err: any): any => logger.warn(err));
    }
  }
}
