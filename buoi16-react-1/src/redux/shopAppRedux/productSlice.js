import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {customAxios} from '../../shopApp/config/api';
import {login} from './userSlice';
const initialState = {
  loading: false,
  data: {},
  error: false,
  favourites: {},
};

export const getListProduct = createAsyncThunk(
  'products/getList',
  async (arg, thunkApi) => {
    try {
      const token = thunkApi.getState().userReducer.token;
      const res = await customAxios.get(`/products.json?auth=${token}`);
      return res.data;
    } catch (error) {
      return {
        error: error.response.data.error,
      };
    }

    // thunkApi.getState() => lấy dữ liệu từ store ra
    // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
  },
);
export const getListFavourite = createAsyncThunk(
  'products/getListFavourite',
  async (arg, thunkApi) => {
    try {
      const token = thunkApi.getState().userReducer.token;
      const userId = thunkApi.getState().userReducer.userId;
      const res = await customAxios.get(
        `/favourite/${userId}.json?auth=${token}`,
      );
      return res.data;
    } catch (error) {
      return {
        error: error.response.data.error,
      };
    }

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
export const favouriteProducts = createAsyncThunk(
  'products/addFavourite',
  async (arg, thunkApi) => {
    const token = thunkApi.getState().userReducer.token;
    const userId = thunkApi.getState().userReducer.userId;
    // const productsList = JSON.parse(
    //   JSON.stringify(thunkApi.getState().productReducer),
    // );
    // const listKeyProducts = Object.keys(productsList).filter((item) => {
    //   return productsList[item].isFavourite === true;
    // });
    const res = await customAxios.post(
      `/favourite/${userId}.json?auth=${token}`,
      {data: arg},
    );
    return res.data;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    favouriteProduct: (state, action) => {
      const id = action.payload;
      state.data[id].isFavourite = !state.data[id].isFavourite;
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
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          const products = action.payload;
          state.data = products;
        }
      })
      .addCase(getListProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      // getlistFavourite
      .addCase(getListFavourite.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getListFavourite.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          const favourites = action.payload;
          state.favourites = favourites;
        }
      })
      .addCase(getListFavourite.rejected, (state, action) => {
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
      })

      .addCase(favouriteProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(favouriteProducts.fulfilled, (state, action) => {
        // const products = action.payload;
        state.loading = false;
        // state.data = products;
      })
      .addCase(favouriteProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {favouriteProduct} = productSlice.actions;
export const selectListProduct = (state) => state.productReducer;

export default productSlice.reducer;
