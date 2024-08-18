import { LABELS } from '../../../const';
import styles from '../labeled-input.module.css';
import { MutableRefObject, ReactNode } from 'react';

function GenderPicker({
  refInput,
  errorMessage,
  className,
}: {
  refInput: { male: MutableRefObject<HTMLInputElement | null>; female: MutableRefObject<HTMLInputElement | null> };
  errorMessage: string;
  className: string;
}): ReactNode {
  return (
    <div>
      <div className={className}>
        <p>{LABELS.gender}</p>
        <label>
          <input type="radio" name="gender" value="male" ref={refInput.male} />
          <p>Male</p>
        </label>
        <label>
          <input type="radio" name="gender" value="female" ref={refInput.female} />
          <p>Female</p>
        </label>
      </div>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default GenderPicker;
