import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '123123',
  productList: [
    {
      id: 1,
      quantity: 5,
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
      quantity: 2,
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
    addCart: (state, actions) => {},
  },
});

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;
