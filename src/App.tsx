import React from 'react'
// import Home from './pages/Home'
const Home = React.lazy(() => import('./pages/Home.tsx'))

function App() {
  return <Home />
}

export default App
