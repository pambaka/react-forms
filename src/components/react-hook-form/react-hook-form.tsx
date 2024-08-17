import styles from '../uncontrolled-form/form.module.css';
import { useForm } from 'react-hook-form';
import { User } from '../../types';
import React, { ReactNode, useState } from 'react';
import validateForm from '../uncontrolled-form/validate-form';
import LabeledInput from './labeled-input';

function ReactHookForm(): ReactNode {
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { register, getValues } = useForm<User>();

  async function handleInputChange() {
    const messages = await validateForm(getValues());
    setNameError(messages.name);
    setAgeError(messages.age);

    if (Object.values(messages).every((message) => message === '')) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }

  function handleButtonClick(event: React.MouseEvent) {
    event.preventDefault();
    console.log('click');
  }

  return (
    <form className={styles.form}>
      <LabeledInput field="name" onChange={handleInputChange} register={register} errorMessage={nameError} />
      <LabeledInput field="age" onChange={handleInputChange} register={register} errorMessage={ageError} />
      <button type="submit" onClick={handleButtonClick} disabled={isButtonDisabled}>
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm;
