import { createSlice } from '@reduxjs/toolkit';
import getCountries from '../utils/get-countries';

const countries = await getCountries();

const initialState: { countries: string[] } = { countries };

export const countriesSlice = createSlice({
  name: 'countriesSlice',
  initialState: initialState,
  reducers: {},
});
