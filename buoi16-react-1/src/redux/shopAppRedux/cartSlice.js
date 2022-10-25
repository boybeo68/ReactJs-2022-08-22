import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, actions) => {
      const {product} = actions.payload;
      if (state?.productList?.length > 0) {
        const findIndexProduct = state.productList.findIndex(
          (item) => item.id === product.id,
        );
        if (findIndexProduct >= 0) {
          state.productList[findIndexProduct].quantity += 1;
        } else {
          state.productList.push({...product, quantity: 1});
        }
      } else {
        state.id = nanoid();
        state.productList = [{...product, quantity: 1}];
      }
    },
  },
});

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;
