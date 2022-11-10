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
      });
  },
});

export const {favouriteProduct} = productSlice.actions;
export const selectListProduct = (state) => state.productReducer;

export default productSlice.reducer;
