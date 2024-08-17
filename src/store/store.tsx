import { configureStore } from '@reduxjs/toolkit';
import { uncontrolledFormSlice } from './uncontrolled-form-slice';
import { reactHookFormSlice } from './react-hook-form-slice';

const store = configureStore({
  reducer: { uncontrolledFormSlice: uncontrolledFormSlice.reducer, reactHookFormSlice: reactHookFormSlice.reducer },
});

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;

export type StoreSlice = keyof StoreRootState;
