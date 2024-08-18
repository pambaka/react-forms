import styles from './labeled-input.module.css';
import { ReactNode } from 'react';
import { LABELS } from '../../const';
import { UserFields } from '../../types';

function FieldWrapper({
  field,
  children,
  errorMessage,
}: {
  field: UserFields;
  children: ReactNode;
  errorMessage: string;
}) {
  return (
    <div>
      <label className={styles.label}>
        <p>{LABELS[field]}</p>
        {children}
      </label>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default FieldWrapper;
