import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { API_URL } from '../../../config'
import { setPopup } from '../../../global/globalReducer'
import Popup from '../Popup'

const Card = ({ user, isDelete }) => {
    const { name, email } = user
    const dispatch = useDispatch()

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`${API_URL}/user/users/${id}`);
            if (res.data.status === "failed") {
                return
            }
            window.location.reload()
        } catch(e) {
            console.log(e)
        }
    }

  return (
      <>
          <div className="w-[400px] bg-white border p-3 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='flex gap-3 items-center'>
                <div className='initial-icon flex shrink-0 grow-0 items-center justify-center w-12 h-12 px-[16px] py-[12px] text-2xl font-semibold bg-[#EAE9FF] text-[#262261] rounded-full'>{name[0].toUpperCase()}</div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </a>
            </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{email}</p>
              <div className='flex justify-between'>
                  <div onClick={() => dispatch(setPopup({ show: true, type: 'message-popup', state: { user } }))} className="inline-flex sm:cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      send
                  </div>
                  {isDelete && <div onClick={() => deleteUser(user._id)} className="inline-flex sm:cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                      Delete
                  </div>}
              </div>
          </div>
      </>
  )
}

export default Card