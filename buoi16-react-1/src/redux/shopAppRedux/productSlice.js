import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    favouriteProduct: (state, action) => {
      const id = action.payload;
      state[id].isFavourite = !state[id].isFavourite;
    },
    addListProduct: (state, action) => {
      const products = action.payload;
      return {...products};
    },
  },
});

export const {favouriteProduct, addListProduct} = productSlice.actions;

export default productSlice.reducer;
