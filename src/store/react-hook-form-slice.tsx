import { createSlice } from '@reduxjs/toolkit';
import { SliceUser } from '../types';

const initialState: { users: SliceUser[] } = { users: [] };

export const reactHookFormSlice = createSlice({
  name: 'reactHookFormSlice',
  initialState,
  reducers: {
    addToReactHookFormSlice(state, action: { payload: { user: SliceUser } }) {
      const newUser = action.payload.user;
      state.users = [newUser, ...state.users];
    },
  },
});

export const { addToReactHookFormSlice } = reactHookFormSlice.actions;
