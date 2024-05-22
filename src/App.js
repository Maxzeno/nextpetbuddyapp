import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home.jsx';
import Counter from './pages/counter.jsx';
import ContactUs from './pages/contactUs.jsx';
import Products from './pages/products.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import ForgotPassword from './pages/forgotPassword.jsx';
import ResetPassword from './pages/resetPassword.jsx';
import ProductDetail from './pages/products_detail.jsx';


/* root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <ContactUs />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/product-detail/:productId',
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
]);


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
