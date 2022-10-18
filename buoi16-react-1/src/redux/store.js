import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterRedux/counterSlice';
import productReducer from './productsRedux/productSlice';
export default configureStore({
  reducer: {
    counterReducer: counterSlice, // products, cart, order, history payment => reducer
    productReducer: productReducer,
  },
});
