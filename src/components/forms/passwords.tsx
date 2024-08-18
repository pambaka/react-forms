import styles from './labeled-input.module.css';
import { MutableRefObject, ReactNode } from 'react';
import { LABELS } from '../../const';
import { UseFormRegister } from 'react-hook-form';
import { User } from '../../types';
import LabeledInputU from './uncontrolled-form/labeled-input';
import LabeledInput from './react-hook-form/labeled-input';

function Passwords({
  uncontrolledForm,
  reactHookForm,
}: {
  uncontrolledForm?: {
    ref: { pass1: MutableRefObject<HTMLInputElement | null>; pass2: MutableRefObject<HTMLInputElement | null> };
    errorMessage: { pass1: string; pass2: string };
  };
  reactHookForm?: {
    register: UseFormRegister<User>;
    onChange: () => Promise<void>;
    errorMessage: { pass1: string; pass2: string };
  };
}): ReactNode {
  return (
    <>
      {uncontrolledForm && (
        <>
          <LabeledInputU labelText={LABELS.password1} inputType="password" refInput={uncontrolledForm.ref.pass1} />
          <p className={styles['error-message']}>{uncontrolledForm.errorMessage.pass1}</p>
        </>
      )}
      {uncontrolledForm && (
        <>
          <LabeledInputU labelText={LABELS.password2} inputType="password" refInput={uncontrolledForm.ref.pass2} />
          <p className={styles['error-message']}>{uncontrolledForm.errorMessage.pass2}</p>
        </>
      )}
      {reactHookForm && (
        <LabeledInput
          field="password1"
          type="password"
          register={reactHookForm.register}
          onChange={reactHookForm.onChange}
          errorMessage={reactHookForm.errorMessage.pass1}
        />
      )}
      {reactHookForm && (
        <LabeledInput
          field="password2"
          type="password"
          register={reactHookForm.register}
          onChange={reactHookForm.onChange}
          errorMessage={reactHookForm.errorMessage.pass2}
        />
      )}
    </>
  );
}

export default Passwords;
