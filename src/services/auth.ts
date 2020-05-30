import { AccessToken } from '../models';
import jwt from 'jsonwebtoken';
import { config } from '../config/environment';

let Model: any = null;

export function generateToken(payload: any) {
  return jwt.sign(
    {
      ...payload
    },
    config.jwt.secret,
    { expiresIn: config.jwt.accessExpiration }
  );
}

export async function checkToken(token: any) {
  return !!(await AccessToken.count({ where: { token: token } }));
}

async function login({ email, password }: any) {
  const user = await Model.findOne({
    where: {
      email,
      password
    },
    raw: true
  });

  if (!user) throw new Error('Wrong Email or Password');

  const token = generateToken({ user });
  await AccessToken.create({ token });

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
  const token = generateToken({ user });
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
