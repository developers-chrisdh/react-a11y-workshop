import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';

import Test from './pages/Test';
import Home from './pages/Home';
import Assignment from "./pages/assignment/Assignment";
import WCAGReport from "./pages/assignment/WCAGReport";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "test",
                element: <Test />,
            },
            {
                path: 'opdracht',
                element: <Assignment />
            },
            {
                path: 'wcag-rapport',
                element: <WCAGReport />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

