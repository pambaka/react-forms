export interface User {
  name: string;
  age: string;
  email: string;
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
  gender: string;
  country: string;
  image: string;
}
