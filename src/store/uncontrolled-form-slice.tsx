import { createSlice } from '@reduxjs/toolkit';
import { SliceUser } from '../types';

const initialState: { users: SliceUser[] } = { users: [] };

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    addToUncontrolledFormSlice(state, action: { payload: { user: SliceUser } }) {
      const newUser = action.payload.user;
      state.users = [newUser, ...state.users];
    },
  },
});

export const { addToUncontrolledFormSlice } = uncontrolledFormSlice.actions;
