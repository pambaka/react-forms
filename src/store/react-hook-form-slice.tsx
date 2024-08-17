import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState: { users: User[] } = { users: [] };

export const reactHookFormSlice = createSlice({
  name: 'reactHookFormSlice',
  initialState,
  reducers: {
    addToReactHookFormSlice(state, action: { payload: { user: User } }) {
      const newUser = action.payload.user;
      state.users = [newUser, ...state.users];
    },
  },
});

export const { addToReactHookFormSlice } = reactHookFormSlice.actions;
