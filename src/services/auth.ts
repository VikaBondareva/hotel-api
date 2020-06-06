import { AccessToken } from '../models';
import jwt from 'jsonwebtoken';
import { config } from '../config/environment';

let Model: any = null;

export function generateToken(payload: any, id: string) {
  return jwt.sign(
    {
      ...payload,
      sub: id,
      expiresIn: config.jwt.accessExpiration
    },
    config.jwt.secret
  );
}

export async function checkToken(token: string) {
  return !!(await AccessToken.count({ where: { token: token } }));
}

async function login({ email, password }: { email: string; password: string }): Promise<{ token: string }> {
  const user = await Model.findOne({
    where: {
      email,
      password
    },
    raw: true
  });
  if (!user) throw new Error('Wrong Email or Password');

  const token = await generateToken({ user }, user.employeeId);
  // await AccessToken.create({ token });

  return { token };
}

async function activateAccount({ resetPasswordToken, password }: any) {
  const user = await Model.findOne({
    where: {
      resetPasswordToken
    }
  });

  if (!user) throw new Error('Wrong Token');

  await user.update({ password, resetPasswordToken: null });
  return user;
}

async function requestResetPassword({ email }: any) {
  const user = await Model.findOne({
    where: {
      email
    }
  });

  if (!user) throw new Error('Wrong Email');
  const token = generateToken({ user }, user.employeeId);
  await user.update({ resetPasswordToken: token });
  return token;
}

export async function logout(token: string) {
  return AccessToken.destroy({ where: { token } });
}

export default ({ model }: any) => {
  Model = model;

  return {
    login,
    activateAccount,
    requestResetPassword
  };
};
