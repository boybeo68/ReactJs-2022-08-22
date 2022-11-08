import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterRedux/counterSlice';
import productReducer from './shopAppRedux/productSlice';
import cartReducer from './shopAppRedux/cartSlice';
import userSlice from './shopAppRedux/userSlice';
export default configureStore({
  reducer: {
    counterReducer: counterSlice, // products, cart, order, history payment => reducer
    productReducer: productReducer,
    cartReducer: cartReducer,
    userReducer: userSlice,
  },
});
