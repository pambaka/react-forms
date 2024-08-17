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
  email: Yup.string().required('Email is required').email('Please enter a valid email address'),
  gender: Yup.string().required('Choose a gender'),
  isTCAccepted: Yup.boolean().isTrue('Please accept the Terms and Conditions agreement'),
});

export default userSchema;
