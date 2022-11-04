import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Checkout from '../pages/Checkout'
const Router = () => {
  return (
    <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetail/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default Router