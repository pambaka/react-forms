import * as Yup from 'yup';
import getCountries from '../utils/get-countries';
import getPasswordErrors from '../utils/get-password-errors';

const maxImageSize = 512000;
const allowedMimeTypes = ['image/png', 'image/jpeg'];

const countries = await getCountries();

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z].*$/, 'First letter should be in upper case (A-Z)')
    .matches(/([a-zA-Z]+)$/, 'Only english letters are allowed'),
  age: Yup.number()
    .required()
    .typeError('Age should be a positive integer number')
    .positive('Age should be a positive number')
    .integer('Age should be an integer number'),
  email: Yup.string().required('Email is required').email('Please enter a valid email address'),
  password1: Yup.string()
    .required('Password is required')
    .test({
      name: '',
      test: function (pass) {
        const errors = getPasswordErrors(pass);

        return errors.length
          ? this.createError({
              message: `Password should include: ${errors.join(', ')}.`,
              path: 'password1',
            })
          : true;
      },
    }),
  password2: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password1')], 'Passwords do not match'),
  gender: Yup.string().required('Choose a gender'),
  country: Yup.string()
    .required('Choose a country')
    .test('Country is in the list', 'Please choose a country from the list', (country) => {
      return countries.includes(country);
    }),
  image: Yup.mixed<FileList>()
    .required('Please upload an image')
    .test('Is valid type', 'Image type should be image/png or image/jpeg', (filesList) => {
      if (filesList.length === 0) return false;
      const file = filesList[0];
      return allowedMimeTypes.includes(file.type);
    })
    .test('Is valid size', `Image size should be < ${maxImageSize / 1024}KB`, (filesList) => {
      if (filesList.length === 0) return false;
      const file = filesList[0];
      return file.size < maxImageSize;
    }),
  isTCAccepted: Yup.boolean()
    .required()
    .test('Is accepted', 'Please accept the Terms and Conditions agreement', (isAccepted) => isAccepted),
});

export default userSchema;
