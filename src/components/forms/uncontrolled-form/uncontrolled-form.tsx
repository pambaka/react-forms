import styles from '../form.module.css';
import { MutableRefObject, ReactNode, useRef, useState } from 'react';
import validateForm from '../../../validation/validate-form';
import LabeledInput from '../../labeled-input/labeled-input';
import { useDispatch } from 'react-redux';
import { addToUncontrolledFormSlice } from '../../../store/uncontrolled-form-slice';
import { useNavigate } from 'react-router-dom';
import { LABELS } from '../../../const';
import getBase64String from '../../../utils/get-base64-string';

function UncontrolledForm(): ReactNode {
  const nameInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const ageInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const emailInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const genderInput: {
    male: MutableRefObject<HTMLInputElement | null>;
    female: MutableRefObject<HTMLInputElement | null>;
  } = {
    male: useRef(null),
    female: useRef(null),
  };
  const imageInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const tAndCInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [imageError, setImageError] = useState('');
  const [tAndCError, setTAndCError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (event: React.MouseEvent) => {
    event.preventDefault();
    const name = nameInput.current?.value ?? '';
    const age = ageInput.current?.value ?? '';
    const email = emailInput.current?.value ?? '';
    const isMale = genderInput.male.current?.checked;
    const isFemale = genderInput.female.current?.checked;
    const gender = isMale ? 'male' : isFemale ? 'female' : '';
    const image = imageInput.current?.files;
    const imageBase64Str = await getBase64String(image);
    const isTCAccepted = tAndCInput.current?.checked ?? false;
    const messages = await validateForm({ name, age, email, gender, image, isTCAccepted });
    setNameError(messages.name);
    setAgeError(messages.age);
    setEmailError(messages.email);
    setGenderError(messages.gender);
    setImageError(messages.image);
    setTAndCError(messages.isTCAccepted);
    if (Object.values(messages).every((value) => value === '')) {
      dispatch(addToUncontrolledFormSlice({ user: { name, age, email, gender, image: imageBase64Str } }));
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
      <div>
        <div className={styles.gender}>
          <p>{LABELS.gender}</p>
          <label>
            <input type="radio" name="gender" value="male" ref={genderInput.male} />
            <p>Male</p>
          </label>
          <label>
            <input type="radio" name="gender" value="female" ref={genderInput.female} />
            <p>Female</p>
          </label>
        </div>
        <p className={styles['error-message']}>{genderError}</p>
      </div>
      <div>
        <label className={styles.label}>
          <p>{LABELS.image}</p>
          <input type="file" accept=".png, .jpeg" ref={imageInput} />
        </label>
        <p className={styles['error-message']}>{imageError}</p>
      </div>
      <div className={styles['t-and-c']}>
        <label>
          <input type="checkbox" ref={tAndCInput} />
          {LABELS.isTCAccepted}
        </label>
        <p className={styles['error-message']}>{tAndCError}</p>
      </div>

      <button type="submit" onClick={(event: React.MouseEvent) => void (async () => await handleForm(event))()}>
        Submit
      </button>
    </form>
  );
}

export default UncontrolledForm;
