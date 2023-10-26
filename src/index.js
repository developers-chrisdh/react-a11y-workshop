import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './App';

import Home from './pages/Home';
import Assignment from './pages/assignment/Assignment';
import Intro from './pages/assignment/Intro';

import Opdracht1 from './pages/assignment/Opdracht1';
import Opdracht2 from './pages/assignment/Opdracht2';
import WCAGReport from './pages/assignment/WCAGReport';

import Checkout from './pages/webshop/components/Checkout/CheckoutCard/CheckoutCard';
import ProductPage from './pages/webshop/components/ProductPage/ProductPage';
import ShippingInfo from './pages/webshop/components/Checkout/ShippingInfo/ShippingInfo';

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
        path: 'website/checkout/cart',
        element: <Checkout />,
      },
      {
        path: 'website/checkout/shipping',
        element: <ShippingInfo />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'opdracht',
        element: <Assignment />,
      },
      {
        path: '/opdracht-1',
        element: <Opdracht1 />,
      },
      {
        path: '/opdracht-2',
        element: <Opdracht2 />,
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
