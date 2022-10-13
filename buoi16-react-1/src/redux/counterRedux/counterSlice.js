import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increeCount: (state, actions) => {
      // Rule redux : không bao giờ được thay đổi trực tiếp state => clone ra rồi mới thay đổi.
      // redux toolkit: convert giúp chúng ta object. push, splice, (những hàm thay đổi trưucj tiếp mảng gốc) => tự động clone trước rồi trả về dữ liệu.
      //  với dữ liệu redux toolkit đã convert rồi thì ko cần return.
      // còn lại thì đều cần return
      state.value += actions.payload;
    },
    decrementCount: (state) => {
      state.value -= 1;
    }, // giảm số count
  },
});
export const {decrementCount, increeCount} = counterSlice.actions;
export default counterSlice.reducer;
