import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
  {id: 1, title: 'product 1', price: 2000},
  {id: 2, title: 'product 2', price: 3000},
  {id: 3, title: 'product 3', price: 4000},
  {id: 4, title: 'product 4', price: 5000},
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, actions) {
      state.push({
        id: nanoid(),
        title: actions.payload.title,
        price: actions.payload.price,
      });
    },
    deleteProduct(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editProduct(state, action) {
      const getItem = state.find((i) => i.id === action.payload.id);
      getItem.title = 'edit';
      getItem.price = 'edit price';
      const getIndex = state.findIndex((i) => i.id === action.payload);
      state.splice(getIndex, getItem);
    },
  },
});

export const {addProduct, deleteProduct, editProduct} = productSlice.actions;

export default productSlice.reducer;
