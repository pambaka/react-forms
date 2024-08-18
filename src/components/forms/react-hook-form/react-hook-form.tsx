import styles from '../form.module.css';
import { useForm } from 'react-hook-form';
import { User } from '../../../types';
import React, { ReactNode, useState } from 'react';
import validateForm from '../../../validation/validate-form';
import LabeledInput from './labeled-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToReactHookFormSlice } from '../../../store/react-hook-form-slice';
import GenderPicker from './gender-picker';
import { LABELS } from '../../../const';
import getBase64String from '../../../utils/get-base64-string';
import CountryPicker from '../country-picker';
import Passwords from '../passwords';

function ReactHookForm(): ReactNode {
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password1Error, setPassword1Error] = useState('');
  const [password2Error, setPassword2Error] = useState('');
  const [genderError, setGenderError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [imageError, setImageError] = useState('');
  const [tAndCError, setTAndCError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { register, getValues } = useForm<User>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleInputChange() {
    const messages = await validateForm(getValues());
    setNameError(messages.name);
    setAgeError(messages.age);
    setEmailError(messages.email);
    setPassword1Error(messages.password1);
    setPassword2Error(messages.password2);
    setGenderError(messages.gender);
    setCountryError(messages.country);
    setImageError(messages.image);
    setTAndCError(messages.isTCAccepted);

    if (Object.values(messages).every((message) => message === '')) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }

  async function handleButtonClick(event: React.MouseEvent) {
    event.preventDefault();
    const user = getValues();

    let imageBase64Str = '';
    imageBase64Str = await getBase64String(user.image);

    dispatch(
      addToReactHookFormSlice({
        user: {
          name: user.name,
          age: user.age,
          email: user.email,
          password: user.password1,
          gender: user.gender,
          country: user.country,
          image: imageBase64Str,
        },
      }),
    );
    navigate('/');
  }

  return (
    <form className={styles.form}>
      <LabeledInput field="name" onChange={handleInputChange} register={register} errorMessage={nameError} />
      <LabeledInput field="age" onChange={handleInputChange} register={register} errorMessage={ageError} />
      <LabeledInput field="email" onChange={handleInputChange} register={register} errorMessage={emailError} />
      <Passwords
        reactHookForm={{
          register,
          onChange: handleInputChange,
          errorMessage: { pass1: password1Error, pass2: password2Error },
        }}
      />
      <GenderPicker onChange={handleInputChange} register={register} errorMessage={genderError} />
      <CountryPicker reactHookForm={{ register, onChange: handleInputChange, errorMessage: countryError }} />
      <div>
        <label>
          <p>{LABELS.image}</p>
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('image', { onChange: () => void (async () => await handleInputChange())() })}
          />
        </label>
        <p className={styles['error-message']}>{imageError}</p>
      </div>
      <div className={styles['t-and-c']}>
        <label>
          <input
            type="checkbox"
            {...register('isTCAccepted', { onChange: () => void (async () => await handleInputChange())() })}
          />
          {LABELS.isTCAccepted}
        </label>
        <p className={styles['error-message']}>{tAndCError}</p>
      </div>
      <button
        type="submit"
        onClick={(event: React.MouseEvent) => void (async () => await handleButtonClick(event))()}
        disabled={isButtonDisabled}
      >
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm;
