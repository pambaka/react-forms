export interface User {
  name: string;
  age: string;
  email: string;
  gender: string;
}

export type UserFields = keyof User;
