import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState: { users: User[] } = { users: [] };

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    addToUncontrolledFormSlice(state, action: { payload: { user: User } }) {
      const newUser = action.payload.user;
      state.users = [newUser, ...state.users];
    },
  },
});

export const { addToUncontrolledFormSlice } = uncontrolledFormSlice.actions;
