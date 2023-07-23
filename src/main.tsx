import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lottie from 'lottie-react'
import App from './App.tsx'
import './index.css'
import Pengajuan from './pages/Pengajuan.tsx'
import { RecoilRoot } from 'recoil'
import Article from './pages/Article.tsx'
import loading from './assets/lottie/loading_2.json'
import ErrorPage from './pages/ErrorPage.tsx'
import ListArticle from './pages/ListArticle.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  { path: '/pengajuan', element: <Pengajuan /> },
  { path: '/artikel', element: <ListArticle /> },
  { path: '/artikel/:articleId/:articleSlug', element: <Article /> }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense
        fallback={
          <div
            style={{
              background: 'white',
              height: '100vh',
              width: '100%',
              margin: 0,
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Lottie style={{ height: 200 }} animationData={loading} />
              <h3
                style={{
                  marginTop: 12,
                  fontSize: 18,
                  fontWeight: 'medium',
                  letterSpacing: 1.5
                }}
              >
                LOADING...
              </h3>
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
)
