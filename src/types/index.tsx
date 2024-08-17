export interface User {
  name: string;
  age: string;
  email: string;
}

export type UserFields = keyof User;
