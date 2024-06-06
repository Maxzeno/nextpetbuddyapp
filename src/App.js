import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthorizeUser } from './components/auth/authCheck.jsx';
import { LogoutUser } from './components/auth/logout.jsx';
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
    element: <AuthorizeUser><Cart /></AuthorizeUser>
  },
  {
    path: '/product',
    element: <Products />
  },
  {
    path: '/order',
    element: <AuthorizeUser><Orders /></AuthorizeUser>
  },
  {
    path: '/order/:orderId',
    element: <AuthorizeUser><OrderDetail /></AuthorizeUser>
  },
  {
    path: '/address',
    element: <AuthorizeUser><Address /></AuthorizeUser>
  },
   {
    path: '/settings',
    element: <AuthorizeUser><Settings /></AuthorizeUser>
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
    path: '/password-reset/:uid/:token',
    element: <ResetPassword />
  },
  {
    path: '/confirm-email/:uid/:token',
    element: <ConfirmEmail />
  },
    {
    path: '/logout',
    element: <LogoutUser />
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
