import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/Authcontext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <header className="main-header">
      <div className="header-lower">
        <div className="outer-box">
          <div className="mobile-nav-toggler">
            {/* <div className="menu-icon"><img src="assets/images/icons/menu-icon.png" alt="" /></div> */}
          </div>
          <div className="menu-area">
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className=" navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  
                    <li className="">
                      <NavLink to="/" className={({ isActive }) => (isActive ? "active-dropdown" : "")}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({ isActive }) => (isActive ? "active-dropdown" : "")}>About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-dropdown" : "")}>Contact Us</NavLink>
                    </li>
                    {user && <li>
                      <NavLink to="/app" className={({ isActive }) => (isActive ? "active-dropdown" : "")}>Users</NavLink>
                    </li>}
                  <li>
                    {user ? <NavLink onClick={() => {
                      console.log('logout called')
                      navigate('/')
                      logout()
                    }} className={({ isActive }) => (isActive ? "" : "")}>Logout</NavLink>: 
                    <NavLink to={"/login"} className={({ isActive }) => (isActive ? "active-dropdown" : "")}>Login</NavLink>}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header