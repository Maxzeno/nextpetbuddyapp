import './index.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/home.jsx';


/* root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
]);


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
