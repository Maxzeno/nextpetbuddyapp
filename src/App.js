import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Address from './pages/address.jsx';
import Cart from './pages/cart.jsx';
import ConfirmEmail from './pages/confirmEmail.jsx';
import ContactUs from './pages/contactUs.jsx';
import ForgotPassword from './pages/forgotPassword.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import OrderDetail from './pages/orderDetail.jsx';
import Orders from './pages/orders.jsx';
import Products from './pages/product.jsx';
import ProductDetail from './pages/productsDetail.jsx';
import ResetPassword from './pages/resetPassword.jsx';
import Settings from './pages/settings.jsx';
import Signup from './pages/signup.jsx';


/* root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contact',
    element: <ContactUs />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/product',
    element: <Products />
  },
  {
    path: '/order',
    element: <Orders />
  },
  {
    path: '/order/:orderId',
    element: <OrderDetail />
  },
  {
    path: '/address',
    element: <Address />
  },
   {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/product/:productId',
    element: <ProductDetail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/confirm-email/:uid/:token',
    element: <ConfirmEmail />
  },
]);


export default function App() {
  return (
    <main>
      <ToastContainer />
      <RouterProvider router={router}>
      </RouterProvider>
    </main>
  );
}
