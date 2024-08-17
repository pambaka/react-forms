export interface User {
  name: string;
  age: string;
  email: string;
  gender: string;
  isTCAccepted: boolean;
}

export type UserFields = keyof User;
