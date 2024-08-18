import * as Yup from 'yup';
import userSchema from './user-schema';
import { User, UserFields } from '../types';

async function validateForm(user: User) {
  const messages = {
    name: '',
    age: '',
    email: '',
    password1: '',
    password2: '',
    gender: '',
    country: '',
    image: '',
    isTCAccepted: '',
  };

  await userSchema.validate(user, { abortEarly: false }).catch((error: Yup.ValidationError) => {
    error.inner.forEach((err: Yup.ValidationError) => {
      if (err.path) {
        const key = err.path as UserFields;
        messages[key] += err.message + '. ';
      }
    });
  });

  return messages;
}

export default validateForm;
