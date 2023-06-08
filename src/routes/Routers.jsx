import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Productdetails from '../pages/Productdetails'
import { Card } from 'reactstrap'
import Error from '../pages/Error'
import Checkhout from '../pages/Checkhout'

const Routers = () => {
  return (
    
    <>
    
    <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='shop' element={<Shop/>}/>
     <Route path='shop/:id' element={<Productdetails/>}/>
     <Route path='card' element={<Card/>}/>
     <Route path='*' element={<Error/>}/>
     <Route path='checkhout' element={<Checkhout/>}/>


    </Routes>
    </>
  )
}

export default Routers