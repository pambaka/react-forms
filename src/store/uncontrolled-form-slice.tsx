import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState: { users: User[] } = { users: [] };

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    addToValidated(state, action: { payload: { user: User } }) {
      const newUser = action.payload.user;
      state.users = [newUser, ...state.users];
      console.log(state.users);
    },
  },
});

export const { addToValidated } = uncontrolledFormSlice.actions;
