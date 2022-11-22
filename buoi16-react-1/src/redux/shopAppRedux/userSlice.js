import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      localStorage.setItem('token', actions.payload.idToken);
      localStorage.setItem('userId', actions.payload.localId);
      state.token = actions.payload.idToken;
      state.userId = actions.payload.localId;
    },
    logout: (state, actions) => {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
