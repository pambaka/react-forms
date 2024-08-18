import styles from '../form.module.css';
import { UseFormRegister } from 'react-hook-form';
import { ReactNode } from 'react';
import { User } from '../../../types';
import { LABELS } from '../../../const';

function GenderPicker({
  register,
  errorMessage,
}: {
  register: UseFormRegister<User>;
  errorMessage: string;
}): ReactNode {
  return (
    <div>
      <div className={styles.gender}>
        <p>{LABELS.gender}</p>
        <div className={styles.gender}>
          <label>
            <input {...register('gender')} type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input {...register('gender')} type="radio" name="gender" value="female" />
            Female
          </label>
        </div>
      </div>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default GenderPicker;
