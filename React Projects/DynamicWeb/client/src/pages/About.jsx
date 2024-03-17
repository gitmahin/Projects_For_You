import React from 'react'
import { useAuth } from '../store/authenticate.jsx'

const About = () => {
  const {user} = useAuth()
  return (
    <div>
      <h1>About</h1>
      <img src={user.profileImg} alt="" />
      <h2>{user.email}</h2>
      <h2>{user.registerDate}</h2>
      <h2>{user.lastLoginDate}</h2>
    </div>
  )
}

export default About
