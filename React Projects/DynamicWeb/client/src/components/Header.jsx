import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/authenticate'

const Header = () => {
  const { isLoggedin } = useAuth()
  const { user } = useAuth()
  const meta_ref = useRef()

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <header>
        <div className="header-wrap">
          <div className="menu">
            <ul>
              <li><NavLink to={'/'} className={(e) => { return e.isActive ? "active-link" : "" }} >Home</NavLink></li>
              
              <li><NavLink to={'/contact'} className={(e) => { return e.isActive ? "active-link" : "" }} >Contact</NavLink></li>






              {isLoggedin ? <li><NavLink to={'/myblog'} className={(e) => { return e.isActive ? "active-link" : "" }} >My Blog</NavLink></li> : <><li><NavLink to={'/registration'} className={(e) => { return e.isActive ? "active-link" : "" }} id='register-menu-btn' >Registration</NavLink></li>
                <li><NavLink to={'/login'} className={(e) => { return e.isActive ? "active-link" : "" }} >Login</NavLink></li></>}


            </ul>

            <div className="head-more-option-container">
              {isLoggedin ?
                <div className="meta-container-wrap">
                  <div onClick={(e) => meta_ref.current.classList.toggle('open')} className="profile-small-pic-btn">
                    <img src={user.profileImg} alt="Profile image" />
                  </div>
                  <div ref={meta_ref} className="meta-info-box">
                    <p className="user-email-meta-box">{user.email}</p>
                    <NavLink to={'/dashboard'} className={(e) => { return e.isActive ? "active-link" : "" }} ><li> Dashboard</li></NavLink>
                    <NavLink to={'/about'} className={(e) => { return e.isActive ? "active-link" : "" }} ><li> About</li></NavLink>
                    <NavLink id="logout" to={'/logout'} className={(e) => { return e.isActive ? "active-link" : "" }} ><li> Logout</li></NavLink>
                  </div>
                </div>
                : ""}

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
