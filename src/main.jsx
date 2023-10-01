import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './layouts/layout'
import Store from './pages/Store'
import About from './pages/About'

import './base.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Store />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
