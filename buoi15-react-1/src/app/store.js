import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../feature/productSlice';

export default configureStore({
  reducer: {
    productReducer,
  },
});
