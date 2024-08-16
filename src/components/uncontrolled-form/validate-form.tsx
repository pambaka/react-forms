import * as Yup from 'yup';
import userSchema from '../../validation/user-schema';
import { USER } from '../../const';

async function validateForm(nameInput: string | undefined, ageInput: string | undefined) {
  const messages = { [USER.name]: '', [USER.age]: '' };

  await userSchema
    .validate({ name: nameInput, age: ageInput }, { abortEarly: false })
    .catch((error: Yup.ValidationError) => {
      error.inner.forEach((err: Yup.ValidationError) => {
        if (err.path) messages[err.path] += err.message + '. ';
      });
    });

  return messages;
}

export default validateForm;
