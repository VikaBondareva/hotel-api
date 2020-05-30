import { Employee } from '../models';

export const checkIsAdministrator = async (userId: string | number, database: any) => {
  const user = await Employee.findOne({
    attributes: ['isAdmin'],
    where: { id: userId }
  });

  if (!user) throw new Error('Employee not found');

  return user && user.isAdmin;
};

export const findRole = async (accountPlanId: any, userId: any, database: any) => {};
