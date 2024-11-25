import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import Layout from './page/Layout'
import Register from './page/Register'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes
