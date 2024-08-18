import { configureStore } from '@reduxjs/toolkit';
import { uncontrolledFormSlice } from './uncontrolled-form-slice';
import { reactHookFormSlice } from './react-hook-form-slice';
import { countriesSlice } from './countries-slice';

const store = configureStore({
  reducer: {
    uncontrolledFormSlice: uncontrolledFormSlice.reducer,
    reactHookFormSlice: reactHookFormSlice.reducer,
    countriesSlice: countriesSlice.reducer,
  },
});

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;

export type StoreFormSlice = Exclude<keyof StoreRootState, 'countriesSlice'>;
