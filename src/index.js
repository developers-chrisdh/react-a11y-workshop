import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './App';

import Webshop from './pages/webshop/components/Webshop';
import Home from './pages/Home';
import Assignment from './pages/assignment/Assignment';
import WCAGReport from './pages/assignment/WCAGReport';
import Checkout from './pages/webshop/components/Checkout/Checkout';
import ProductPage from './pages/webshop/components/ProductPage/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'website',
        element: <ProductPage />,
      },
      {
        path: 'website/checkout',
        element: <Checkout />,
      },
      {
        path: 'opdracht',
        element: <Assignment />,
      },
      {
        path: 'wcag-rapport',
        element: <WCAGReport />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
