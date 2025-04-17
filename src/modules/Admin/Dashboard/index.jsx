import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import { AuthContext } from '../../../context/Authcontext';
import { setCurruser } from '../../../global/globalReducer';
import Card from '../../../shared/components/Card'

const DashboardWrapper = () => {
    const [users, setUsers] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userId } = useContext(AuthContext);

  
    useEffect(() => {
      const getAllUsers = async () => {
        try {
          const res = await axios.get(`${API_URL}/user/getallusers`);
          if(res.data.status == 'failed') {
            setUsers(null)
            return
          }
          setUsers(res.data)
          console.log(res.data)
          dispatch(setCurruser(res.data.find((user) => user._id === userId)))
        } catch (error) {
          setMessage("Invalid or expired token");
        }
      };
        getAllUsers();
    }, []);
  return (
      <div className='relative'>
          <div className="flex justify-between">
              <span className='text-3xl text-black font-bold'>User Dashboard</span>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => navigate('/admin/dashboard/add-user')}>Add user</button>
          </div>
          <div className='flex py-4 gap-3 items-center flex-wrap'>
              {users?.map((user, i) => <Card key={i} user={user} isDelete />)}
          </div>
      </div>
  )
}

export default DashboardWrapper