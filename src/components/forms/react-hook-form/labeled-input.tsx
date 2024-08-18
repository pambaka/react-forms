import styles from '../labeled-input.module.css';
import { LABELS } from '../../../const';
import { User, UserFields } from '../../../types';
import { UseFormRegister } from 'react-hook-form';

function LabeledInput({
  field,
  type = 'text',
  register,
  onChange,
  errorMessage,
}: {
  field: UserFields;
  type?: 'text' | 'number' | 'password';
  register: UseFormRegister<User>;
  onChange: () => Promise<void>;
  errorMessage: string;
}) {
  return (
    <div>
      <label className={styles.label}>
        <p>{LABELS[field]}</p>
        <input type={type} {...register(field, { onChange: () => void (async () => await onChange())() })} />
      </label>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default LabeledInput;
