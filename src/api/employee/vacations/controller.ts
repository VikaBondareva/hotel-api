import { Response } from 'express';
import { Vacations } from '../../../models';

function getBusinessDateCount(startDate: any, endDate: any) {
  var elapsed: any, daysBeforeFirstSaturday: any, daysAfterLastSunday: any;

  var ifThen = function (a: any, b: any, c: any) {
    return a == b ? c : a;
  };
  elapsed = endDate - startDate;
  elapsed /= 86400000;

  daysBeforeFirstSaturday = (7 - startDate.getDay()) % 7;
  daysAfterLastSunday = endDate.getDay();

  elapsed -= daysBeforeFirstSaturday + daysAfterLastSunday;
  elapsed = (elapsed / 7) * 5;
  elapsed += ifThen(daysBeforeFirstSaturday - 1, -1, 0) + ifThen(daysAfterLastSunday, 6, 5);

  return Math.ceil(elapsed);
}

class VacationController {
  public async getByEmployeeCurrent(req: any, res: Response): Promise<void> {
    const employeeId = req.user.employeeId;
    const vacations = await Vacations.findAll({ where: { employeeId } });

    res.status(200).json(vacations);
  }

  public async createRequestVacation(req: any, res: Response): Promise<void> {
    const employeeId = req.user.employeeId;
    const model = req.body;
    var countDays = getBusinessDateCount(new Date(model.startDate), new Date(model.endDate));
    const vacation = await Vacations.create({
      startDate: model.startDate,
      endDate: model.endDate,
      status: 'request',
      employeeId,
      isUnpaid: model.isUnpaid,
      countDays
    });

    res.status(200).json(vacation);
  }
}

export default new VacationController();
