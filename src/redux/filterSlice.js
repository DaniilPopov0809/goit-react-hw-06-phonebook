import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: {
      reducer(state, action) {
       return state = action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
