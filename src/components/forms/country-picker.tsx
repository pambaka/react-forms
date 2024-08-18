import styles from './labeled-input.module.css';
import { MutableRefObject, ReactNode } from 'react';
import { LABELS } from '../../const';
import { UseFormRegister } from 'react-hook-form';
import { User } from '../../types';
import { useSelector } from 'react-redux';
import { StoreRootState } from '../../store/store';

function CountryPicker({
  uncontrolledForm,
  reactHookForm,
}: {
  uncontrolledForm?: { ref: MutableRefObject<HTMLInputElement | null>; errorMessage: string };
  reactHookForm?: { register: UseFormRegister<User>; onChange: () => Promise<void>; errorMessage: string };
}): ReactNode {
  const countries = useSelector<StoreRootState, string[]>((state) => state.countriesSlice.countries);

  const errorMessage = uncontrolledForm ? uncontrolledForm.errorMessage : reactHookForm?.errorMessage;

  return (
    <div>
      <label className={styles.label}>
        <p>{LABELS.country}</p>
        {uncontrolledForm && <input list="countries" ref={uncontrolledForm.ref} />}
        {reactHookForm && (
          <input
            list="countries"
            {...reactHookForm.register('country', {
              onChange: () => void (async () => await reactHookForm.onChange())(),
            })}
          />
        )}
        <datalist id="countries">
          {countries.map((country) => (
            <option value={country} key={country}></option>
          ))}
        </datalist>
      </label>
      <p className={styles['error-message']}>{errorMessage}</p>
    </div>
  );
}

export default CountryPicker;
