import styles from '../form.module.css';
import { useForm } from 'react-hook-form';
import { User } from '../../../types';
import { FormEvent, ReactNode } from 'react';
import LabeledInput from './labeled-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToReactHookFormSlice } from '../../../store/react-hook-form-slice';
import GenderPicker from './gender-picker';
import { LABELS } from '../../../const';
import getBase64String from '../../../utils/get-base64-string';
import CountryPicker from '../country-picker';
import Passwords from '../passwords';
import FieldWrapper from '../field-wrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import userSchema from '../../../validation/user-schema';

function ReactHookForm(): ReactNode {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({ mode: 'onChange', resolver: yupResolver(userSchema) });

  const onSubmit = async (user: User) => {
    let imageBase64Str = '';
    imageBase64Str = await getBase64String(user.image);

    dispatch(
      addToReactHookFormSlice({
        user: {
          name: user.name,
          age: `${user.age}`,
          email: user.email,
          password: user.password1,
          gender: user.gender,
          country: user.country,
          image: imageBase64Str,
        },
      }),
    );
    navigate('/');
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        void handleSubmit(onSubmit)();
      }}
    >
      <LabeledInput field="name" register={register} errorMessage={errors.name?.message ?? ''} />
      <LabeledInput field="age" register={register} errorMessage={errors.age?.message ?? ''} />
      <LabeledInput field="email" register={register} errorMessage={errors.email?.message ?? ''} />
      <Passwords
        reactHookForm={{
          register,
          errorMessage: { pass1: errors.password1?.message ?? '', pass2: errors.password2?.message ?? '' },
        }}
      />
      <GenderPicker register={register} errorMessage={errors.gender?.message ?? ''} />
      <CountryPicker reactHookForm={{ register, errorMessage: errors.country?.message ?? '' }} />
      <FieldWrapper field="image" errorMessage={errors.image?.message ?? ''}>
        <input type="file" accept="image/png, image/jpeg" {...register('image')} />
      </FieldWrapper>
      <div className={styles['t-and-c']}>
        <label>
          <input type="checkbox" {...register('isTCAccepted')} />
          {LABELS.isTCAccepted}
        </label>
        <p className={styles['error-message']}>{errors.isTCAccepted?.message}</p>
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm;
