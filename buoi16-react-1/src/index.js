import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import TodoApp from './todoApp/TodoApp';
import RandomNumber from './randomNumberProject/RandomNumber';
import LearnRouter from './shopApp/components/LearnRouter';
import ShopApp from './shopApp/ShopApp';
import store from './redux/store';
import {Provider} from 'react-redux';
import ProductList from './shopApp/pages/ProductList';
import FavouriteList from './shopApp/pages/FavouriteList';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todo',
    element: <TodoApp />,
  },
  {
    path: '/random',
    element: <RandomNumber />,
  },
  {
    path: '/shopApp',
    element: <ProductList />,
  },
  {
    path: '/learnRouter',
    element: <LearnRouter />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/cart',
    element: <div>Cart</div>,
  },
  {
    path: '/favourite',
    element: <FavouriteList />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// random số.
// chia các component. 1 thành phần UI có thể được gọi là 1 component
