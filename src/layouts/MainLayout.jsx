import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from '../context/Authcontext'
import Footer from '../shared/components/Footer'
import Header from '../shared/components/Header/index.jsx'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    // if(!location.pathname.includes('admin') && user) {
    //   navigate('/app')
    // }
  }, [user])
  return (
    <AuthProvider>
      <Header />
      <main style={{minHeight: 200, paddingLeft: 24, paddingRight: 24}}>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  )
}

export default MainLayout