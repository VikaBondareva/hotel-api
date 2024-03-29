import { ITransporter } from '../interfaces';

export class Transport {
  private _transporter: ITransporter;

  public constructor(transporter: ITransporter) {
    this._transporter = transporter;
  }

  public sendCode(email: string, code: number) {
    this._transporter.sendCode(email, code);
  }

  public sendLinkToChangePassword(originLink: string | string[], email: string, token: string, name: string) {
    this._transporter.sendLinkToChangePassword(originLink, email, token, name);
  }
}
