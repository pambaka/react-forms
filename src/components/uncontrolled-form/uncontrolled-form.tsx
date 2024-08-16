import styles from './form.module.css';
import { MutableRefObject, ReactNode, useRef, useState } from 'react';
import validateForm from './validate-form';
import LabeledInput from '../labeled-input/labeled-input';

function UncontrolledForm(): ReactNode {
  const nameInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const ageInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleForm = async (event: React.MouseEvent) => {
    event.preventDefault();
    const messages = await validateForm(nameInput.current?.value, ageInput.current?.value);
    setNameError(messages.name);
    setAgeError(messages.age);
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
