import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import TodoApp from './todoApp/TodoApp';
import RandomNumber from './randomNumberProject/RandomNumber';
import ShopApp from './shopApp/ShopApp';
import store from './redux/store';
import {Provider} from 'react-redux';
import ProductList from './shopApp/pages/ProductList';
import FavouriteList from './shopApp/pages/FavouriteList';
import CartPage from './shopApp/pages/cartPage';
import ProductDetailPage from './shopApp/pages/ProductDetailPage';
import TodoAppApi from './todoAppAPI/TodoApp';
import AddProdct from './shopApp/pages/AddProdct';
import Login from './shopApp/pages/Login';
import ProtectRouter from './shopApp/components/ProtectRouter';
import Chat from './shopApp/pages/Chat';
import 'react-chat-elements/dist/main.css';

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
    path: '/todoApi',
    element: <TodoAppApi />,
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
    path: '/products',
    element: (
      <ProtectRouter>
        <ProductList />
      </ProtectRouter>
    ),
  },
  {
    path: '/products/:productId',
    element: <ProductDetailPage />,
  },
  {
    path: '/cart',
    element: (
      <ProtectRouter>
        <CartPage />
      </ProtectRouter>
    ),
  },
  {
    path: '/favourite',
    element: <FavouriteList />,
  },
  {
    path: '/add-product',
    element: (
      <ProtectRouter>
        <AddProdct />
      </ProtectRouter>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/chat',
    element: (
      <ProtectRouter>
        <Chat />
      </ProtectRouter>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// random số.
// chia các component. 1 thành phần UI có thể được gọi là 1 component

// Authen
// - Client -> (email, pass) -> server
// - Server -> create Token -> Client => Client sẽ phải lưu token lại để sử dụng ( localStorage và redux)
// - Những request cần bảo mật thì client sẽ gửi data kèm tokent lên server
