import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterRedux/counterSlice';
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
