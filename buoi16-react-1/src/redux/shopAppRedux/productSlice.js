import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {customAxios} from '../../shopApp/config/api';
import {login} from './userSlice';
const initialState = {
  loading: false,
  data: {},
  error: false,
};

export const getListProduct = createAsyncThunk(
  'products/getList',
  async (arg, thunkApi) => {
    const token = thunkApi.getState().userReducer.token;
    const res = await customAxios.get(`/products.json?auth=${token}`);
    return res.data;

    // thunkApi.getState() => lấy dữ liệu từ store ra
    // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
  },
);
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (arg, thunkApi) => {
    const token = thunkApi.getState().userReducer.token;
    const res = await customAxios.post(`/products.json?auth=${token}`, {
      title: arg.title,
      description: arg.description,
      price: arg.price,
      image: arg.image,
      isFavourite: arg.isFavourite,
    });
    return res.data;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    favouriteProduct: (state, action) => {
      const id = action.payload;
      state.data[id].isFavourite = !state[id].isFavourite;
    },
  },
  extraReducers: (builder) => {
    builder

      // getlist
      .addCase(getListProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getListProduct.fulfilled, (state, action) => {
        const products = action.payload;
        state.loading = false;
        state.data = products;
      })
      .addCase(getListProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      // add product

      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        // const products = action.payload;
        state.loading = false;
        // state.data = products;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {favouriteProduct} = productSlice.actions;
export const selectListProduct = (state) => state.productReducer;

export default productSlice.reducer;
