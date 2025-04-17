import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authcontext';
import ForgotWrapper from '../../../modules/Auth/ForgotPassword'

const ForgetPassword = () => {
  return (
    <div>
        <ForgotWrapper />
    </div>
  )
}

export default ForgetPassword