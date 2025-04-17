import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authcontext';
import DashboardWrapper from '../../../modules/Admin/Dashboard'

const DashBoard = () => {

  return (
    <div className='mt-8 px-6'>
        <DashboardWrapper />
    </div>
  )
}

export default DashBoard
