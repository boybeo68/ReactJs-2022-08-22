import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
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
    title: 'Oppo Reno 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident et, debitis fuga aliquam laudantium iste placeat eveniet? Alias, non!',
    price: 12000000,
    isFavourite: false,
    image:
      'https://i.picsum.photos/id/22/900/900.jpg?hmac=ix9jsoGSw8TnVOgKkn8RSJItr-cAtZmMTfVlg5QdmbU',
  },
  {
    id: 3,
    title: 'Macpro m1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident et, debitis fuga aliquam laudantium iste placeat eveniet? Alias, non!',
    price: 60000000,
    isFavourite: false,
    image:
      'https://i.picsum.photos/id/908/900/900.jpg?hmac=qAFo44QVaMI0_ouSCjxcqK-QUL_eqQFPtmnqp0kfhDE',
  },
  {
    id: 4,
    title: 'Samsung 123',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident et, debitis fuga aliquam laudantium iste placeat eveniet? Alias, non!',
    price: 60000000,
    isFavourite: false,
    image:
      'https://i.picsum.photos/id/908/900/900.jpg?hmac=qAFo44QVaMI0_ouSCjxcqK-QUL_eqQFPtmnqp0kfhDE',
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;

export default productSlice.reducer;

