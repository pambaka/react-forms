import * as Yup from 'yup';
import userSchema from '../../validation/user-schema';
import { USER } from '../../const';
import { User, UserFields } from '../../types';

async function validateForm({ name, age }: User) {
  const messages = { [USER.name]: '', [USER.age]: '' };

  await userSchema.validate({ name, age }, { abortEarly: false }).catch((error: Yup.ValidationError) => {
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
