import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './page/LoginPage'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes