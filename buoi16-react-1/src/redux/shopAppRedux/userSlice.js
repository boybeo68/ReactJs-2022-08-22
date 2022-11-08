import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.token = 'abc';
    },
    logout: (state, actions) => {
      state.token = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
