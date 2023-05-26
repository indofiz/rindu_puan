import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import Pengajuan from './pages/Pengajuan.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  { path: '/pengajuan', element: <Pengajuan /> }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
