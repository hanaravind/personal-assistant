import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authcontext';
import LoginWrapper from '../../../modules/Auth/Login'

const Login = () => {
  return (
    <>
        <LoginWrapper />
    </>
  )
}

export default Login