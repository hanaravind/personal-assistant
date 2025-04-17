import React, { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../context/Authcontext';
import { useLocation } from "react-router-dom";

const AdminLayout = ({ children }) => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext);
  
    useEffect(() => {
        
    }, [])
  return (
    <AuthProvider>
    <div className="admin-layout">
      <nav>
        <div className='flex gap-3 bg-amber-100 p-3'>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/templates">Templates</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
    </AuthProvider>
  );
};

export default AdminLayout;