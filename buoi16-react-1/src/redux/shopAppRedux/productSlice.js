import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    favouriteProduct: (state, action) => {
      const id = action.payload;
      const itemIndexEdit = state.findIndex((i) => i.id === id);
      const item = state[itemIndexEdit];
      item.isFavourite = !item.isFavourite;
      state.splice(itemIndexEdit, 1, item);
    },
    addListProduct: (state, action) => {
      const products = action.payload;
      const data = [];
      for (let index = 0; index < Object.keys(products).length; index++) {
        const id = Object.keys(products)[index];
        data.push({...products[id], id: id});
      }
      return [...data];
    },
  },
});

export const {favouriteProduct, addListProduct} = productSlice.actions;

export default productSlice.reducer;
