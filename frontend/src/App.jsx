import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Fotter from './components/Fotter/Fotter'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [login, setLogin] = useState(false)

  return (
    <>
      {login ? <LoginPopup setLogin={setLogin} /> : <></>}
      <div className='app'>
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Fotter />
    </>

  )
}

export default App