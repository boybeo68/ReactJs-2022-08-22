import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrementCount, increeCount} from '../redux/counterRedux/counterSlice';

export default function ShopApp() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Shop App</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increeCount(5))}>incree count</button>
      <button onClick={() => dispatch(decrementCount())}>incree count</button>
    </div>
  );
}
// tech:
// - router: web app có nhiều page
// - Authenication: tích hợp firebase.
// - State manage: Redux (mobx) => redux
// - Rest API => làm việc với API ( giao tiếp giữa FE và BE)

// Function:
// -Login, logout, saveLogin
// List product, detail product,
// add to cart
// favourite
// Order
