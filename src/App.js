import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/home.jsx';
import Counter from './pages/counter.jsx';
import ContactUs from './pages/contactUs.jsx';
import Products from './pages/products.jsx';


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
  }
]);


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
