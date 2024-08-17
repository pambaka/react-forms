import styles from './form.module.css';
import { MutableRefObject, ReactNode, useRef, useState } from 'react';
import validateForm from '../../validation/validate-form';
import LabeledInput from '../labeled-input/labeled-input';
import { useDispatch } from 'react-redux';
import { addToUncontrolledFormSlice } from '../../store/uncontrolled-form-slice';
import { useNavigate } from 'react-router-dom';
import { LABELS } from '../../const';

function UncontrolledForm(): ReactNode {
  const nameInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const ageInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const emailInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (event: React.MouseEvent) => {
    event.preventDefault();
    const name = nameInput.current?.value ?? '';
    const age = ageInput.current?.value ?? '';
    const email = emailInput.current?.value ?? '';
    const messages = await validateForm({ name, age, email });
    setNameError(messages.name);
    setAgeError(messages.age);
    setEmailError(messages.email);
    if (Object.values(messages).every((value) => value === '')) {
      dispatch(addToUncontrolledFormSlice({ user: { name, age, email } }));
      navigate('/');
    }
  };

  return (
    <form className={styles.form}>
      <div>
        <LabeledInput labelText={LABELS.name} inputType="text" refInput={nameInput} />
        <p className={styles['error-message']}>{nameError}</p>
      </div>
      <div>
        <LabeledInput labelText={LABELS.age} inputType="number" refInput={ageInput} />
        <p className={styles['error-message']}>{ageError}</p>
      </div>
      <div>
        <LabeledInput labelText={LABELS.email} inputType="text" refInput={emailInput} />
        <p className={styles['error-message']}>{emailError}</p>
      </div>
      <button type="submit" onClick={(event: React.MouseEvent) => void (async () => await handleForm(event))()}>
        Submit
      </button>
    </form>
  );
}

export default UncontrolledForm;
