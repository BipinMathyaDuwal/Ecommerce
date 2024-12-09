import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import Layout from './page/Layout'
import Register from './page/Register'
import Profile from './page/Profile'
import EmailVerification from './page/EmailVerification'
import AddProductForm from './page/AdminPage/AddProductForm'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addproduct' element={<AddProductForm />} />

            </Route>
            <Route path="/verifyuser/:token" element={<EmailVerification/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes
