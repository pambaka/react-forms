import styles from '../labeled-input.module.css';
import { MutableRefObject, ReactNode } from 'react';

function LabeledInput({
  labelText,
  inputType = 'text',
  refInput,
  errorMessage,
}: {
  labelText: string;
  inputType?: 'text' | 'number' | 'password';
  refInput?: MutableRefObject<HTMLInputElement | null>;
  errorMessage: string;
}): ReactNode {
  return (
    <div>
      <label className={styles.label}>
        <p>{labelText}</p>
        <input type={inputType} ref={refInput}></input>
      </label>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default LabeledInput;
