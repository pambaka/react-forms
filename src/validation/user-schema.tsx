import * as Yup from 'yup';
import getCountries from '../utils/get-countries';

const maxImageSize = 512000;
const allowedMimeTypes = ['image/png', 'image/jpeg'];

const countries = await getCountries();

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
  password1: Yup.string().required('Password is required'),
  password2: Yup.string().oneOf([Yup.ref('password1')], 'Passwords do not match'),
  gender: Yup.string().required('Choose a gender'),
  country: Yup.string()
    .required('Choose a country')
    .test('Country is in the list', 'Please choose a country from the list', (country) => {
      return countries.includes(country);
    }),
  image: Yup.mixed()
    .required('Please upload an image')
    .test('Is valid type', 'Image type should be image/png or image/jpeg', (filesList) => {
      if (!(0 in filesList)) return false;
      const file = filesList[0] as File;
      return allowedMimeTypes.includes(file.type);
    })
    .test('Is valid size', `Image size should be < ${maxImageSize / 1024}KB`, (filesList) => {
      if (!(0 in filesList)) return false;
      const file = filesList[0] as File;
      return file.size < maxImageSize;
    }),
  isTCAccepted: Yup.boolean().isTrue('Please accept the Terms and Conditions agreement'),
});

export default userSchema;
