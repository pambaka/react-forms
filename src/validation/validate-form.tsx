import * as Yup from 'yup';
import userSchema from './user-schema';
import { User, UserFields } from '../types';

async function validateForm({ name, age, email, gender, isTCAccepted }: User) {
  const messages = { name: '', age: '', email: '', gender: '', isTCAccepted: '' };

  await userSchema
    .validate({ name, age, email, gender, isTCAccepted }, { abortEarly: false })
    .catch((error: Yup.ValidationError) => {
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
