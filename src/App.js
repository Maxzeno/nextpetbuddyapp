import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/home.jsx';
import Counter from './pages/counter.jsx';


/* root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/counter',
    element: <Counter></Counter>
  }
]);


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
