import React from 'react'
import TheHeader from './components/Header/TheHeader'
import Router  from './Router/Router'
import { useLocation } from 'react-router-dom'


const App = () => {
  const location = useLocation();
  return (
    <>
    {
      location.pathname !== '/dashboard' ?  <TheHeader/> : ''
    }
    <Router></Router>
    {/* <Main/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    </>
  )
}

export default App