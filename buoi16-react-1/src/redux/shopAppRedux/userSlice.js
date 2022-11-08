import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      localStorage.setItem('token', 'abc');
      state.token = 'abc';
    },
    logout: (state, actions) => {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
