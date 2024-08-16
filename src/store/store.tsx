import { configureStore } from '@reduxjs/toolkit';
import { uncontrolledFormSlice } from './uncontrolled-form-slice';

const store = configureStore({
  reducer: { uncontrolledFormSlice: uncontrolledFormSlice.reducer },
});

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;
