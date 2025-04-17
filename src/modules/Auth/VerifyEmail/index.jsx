import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../config";

const VerifyEmailWrapper = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/verify-whatsapp?token=${token}`);
      setTimeout(() => {
        navigate('/login')
      }, 1000)
      toast.success(message)
    } catch (error) {
      console.error(error)
    }
  };

  return <div className="flex justify-center">
    <button onClick={verifyEmail} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Click to verify
    </button>
  </div>;
};

export default VerifyEmailWrapper;
