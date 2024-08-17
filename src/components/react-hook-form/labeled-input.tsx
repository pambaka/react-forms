import styles from '../labeled-input/labeled-input.module.css';
import { LABELS } from '../../const';
import { User, UserFields } from '../../types';
import { UseFormRegister } from 'react-hook-form';

function LabeledInput({
  field,
  register,
  onChange,
  errorMessage,
}: {
  field: UserFields;
  register: UseFormRegister<User>;
  onChange: () => Promise<void>;
  errorMessage: string;
}) {
  return (
    <div>
      <label className={styles.label}>
        <p>{LABELS[field]}</p>
        <input {...register(field, { onChange: () => void (async () => await onChange())() })} />
      </label>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default LabeledInput;
