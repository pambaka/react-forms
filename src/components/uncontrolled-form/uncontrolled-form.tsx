import styles from './form.module.css';
import { MutableRefObject, ReactNode, useRef, useState } from 'react';
import validateForm from './validate-form';
import LabeledInput from '../labeled-input/labeled-input';
import { useDispatch } from 'react-redux';
import { addToValidated } from '../../store/uncontrolled-form-slice';
import { useNavigate } from 'react-router-dom';

function UncontrolledForm(): ReactNode {
  const nameInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const ageInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (event: React.MouseEvent) => {
    event.preventDefault();
    const name = nameInput.current?.value;
    const age = ageInput.current?.value;
    const messages = await validateForm(name, age);
    setNameError(messages.name);
    setAgeError(messages.age);
    if (Object.values(messages).every((value) => value === '')) {
      dispatch(addToValidated({ user: { name, age } }));
      navigate('/');
    }
  };

  return (
    <form className={styles.form}>
      <div>
        <LabeledInput labelText="Name: " inputType="text" refInput={nameInput} />
        <p className={styles['error-message']}>{nameError}</p>
      </div>
      <div>
        <LabeledInput labelText="Age: " inputType="number" refInput={ageInput} />
        <p className={styles['error-message']}>{ageError}</p>
      </div>
      <button type="submit" onClick={(event: React.MouseEvent) => void (async () => await handleForm(event))()}>
        Submit
      </button>
    </form>
  );
}

export default UncontrolledForm;
