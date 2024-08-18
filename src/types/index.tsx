export interface User {
  name: string;
  age: string;
  email: string;
  password1: string;
  password2: string;
  gender: string;
  country: string;
  image: FileList | null | undefined;
  isTCAccepted: boolean;
}

export type UserFields = keyof User;

export interface SliceUser {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  image: string;
}
