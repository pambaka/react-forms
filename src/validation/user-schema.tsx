import * as Yup from 'yup';

const userSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z].*$/, 'First letter should be in upper case (A-Z)')
    .matches(/([a-zA-Z]+)$/, 'Only english letters are allowed'),
  age: Yup.number()
    .typeError('Age should be a positive integer number')
    .positive('Age should be a positive number')
    .integer('Age should be an integer number'),
});

export default userSchema;
