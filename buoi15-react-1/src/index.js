import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {Detail} from './detailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveExample from './Responsive';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/:productId',
    element: <Detail />,
  },
  {
    path: '/responsive',
    element: <ResponsiveExample />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('test'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
