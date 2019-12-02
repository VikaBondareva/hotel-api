export const enum StatusUsers {
  NeedChangePassword = 'changePassword',
  Active = 'active',
  Blocking = 'blocked',
  NotVerified = 'notVerified'
}

export const StatusUsersArray = [
  StatusUsers.NeedChangePassword,
  StatusUsers.Active,
  StatusUsers.Blocking,
  StatusUsers.NotVerified
];

export enum CountAttempt {
  loginClient = 4
}

export enum StatusService {
  Available = 'available',
  Blocked = 'blocked',
  NotAvailable = 'notAvailable'
}

export enum StatusBookings {
  Pending = 'pending',
  Paid = 'paid',
  Affected = 'affected',
  Canceled = 'canceled'
}
