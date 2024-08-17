export interface User {
  name: string | undefined;
  age: string | undefined;
}

export type UserFields = keyof User;
