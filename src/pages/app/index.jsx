import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/Authcontext';
import { setCurruser } from '../../global/globalReducer';
import Card from '../../shared/components/Card';

const MainUser = () => {
    const [users, setUsers] = useState(null);
    const [currentUser, setCurrentUser] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, logout, userId } = useContext(AuthContext);
  
    useEffect(() => {
      const getAllUsers = async () => {
        try {
          const res = await axios.get(`${API_URL}/user/getallusers`);
          if(res.data.status == 'failed') {
            setUsers(null)
            return
          }
          setUsers(res.data.filter((user) => user._id !== userId))
          setCurrentUser(res.data.find((user) => user._id === userId))
          dispatch(setCurruser(res.data.find((user) => user._id === userId)))
        } catch (error) {
        }
      };
    if(userId) {
        getAllUsers();
    }
    }, [userId]);

    console.log('user', currentUser)
  return (
    <div>
        <div className="flex justify-between">
              <span className='text-3xl text-black font-bold'>Welcome {currentUser?.name}</span>
          </div>
          <div className='flex py-4 gap-3 items-center flex-wrap'>
              {users?.map((user, i) => <Card key={i} user={user} />)}
          </div>
    </div>
  )
}

export default MainUser