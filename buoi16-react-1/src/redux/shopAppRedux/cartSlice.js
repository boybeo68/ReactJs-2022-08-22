import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '123123',
  productList: [
    {
      id: 1,
      quantity: 1,
      title: 'Iphone 14',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident et, debitis fuga aliquam laudantium iste placeat eveniet? Alias, non!',
      price: 20000000,
      isFavourite: false,
      image:
        'https://i.picsum.photos/id/977/900/900.jpg?hmac=XTeZUZmrs9qa442kAS9aVroBE9zRnRkvpgfKHRDXqx4',
    },
    {
      id: 2,
      quantity: 1,
      title: 'Oppo Reno 8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident et, debitis fuga aliquam laudantium iste placeat eveniet? Alias, non!',
      price: 12000000,
      isFavourite: false,
      image:
        'https://i.picsum.photos/id/22/900/900.jpg?hmac=ix9jsoGSw8TnVOgKkn8RSJItr-cAtZmMTfVlg5QdmbU',
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, actions) => {
      const {product} = actions.payload;
      const findIndexProduct = state.productList.findIndex(
        (item) => item.id === product.id,
      );
      if (findIndexProduct >= 0) {
        state.productList[findIndexProduct].quantity += 1;
      } else {
        state.productList.push({...product, quantity: 1});
      }
    },
  },
});

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;
