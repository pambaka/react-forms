import styles from '../labeled-input.module.css';
import { MutableRefObject, ReactNode } from 'react';

function LabeledInput({
  labelText,
  inputType,
  refInput,
}: {
  labelText: string;
  inputType: 'text' | 'number' | 'password';
  refInput?: MutableRefObject<HTMLInputElement | null>;
}): ReactNode {
  return (
    <label className={styles.label}>
      <p>{labelText}</p>
      <input type={inputType} ref={refInput}></input>
    </label>
  );
}

export default LabeledInput;
