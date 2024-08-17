import styles from '../uncontrolled-form/form.module.css';
import { useForm } from 'react-hook-form';
import { User } from '../../types';
import React, { ReactNode, useState } from 'react';
import validateForm from '../../validation/validate-form';
import LabeledInput from './labeled-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToReactHookFormSlice } from '../../store/react-hook-form-slice';

function ReactHookForm(): ReactNode {
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { register, getValues } = useForm<User>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleInputChange() {
    const messages = await validateForm(getValues());
    setNameError(messages.name);
    setAgeError(messages.age);
    setEmailError(messages.email);

    if (Object.values(messages).every((message) => message === '')) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }

  function handleButtonClick(event: React.MouseEvent) {
    event.preventDefault();
    const user = getValues();
    dispatch(addToReactHookFormSlice({ user }));
    navigate('/');
  }

  return (
    <form className={styles.form}>
      <LabeledInput field="name" onChange={handleInputChange} register={register} errorMessage={nameError} />
      <LabeledInput field="age" onChange={handleInputChange} register={register} errorMessage={ageError} />
      <LabeledInput field="email" onChange={handleInputChange} register={register} errorMessage={emailError} />
      <button type="submit" onClick={handleButtonClick} disabled={isButtonDisabled}>
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm;
