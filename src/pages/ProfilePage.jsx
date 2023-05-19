import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'


const ProfilePage = () => {
    const { logout } = useContext(SessionContext)
    const { isLoggedIn } = useContext(SessionContext)

    console.log("Profile logged: ", isLoggedIn)
  return (
    <div>ProfilePage
        <button type='button' onClick={logout}>Logout</button> 
    </div>
  )
}

export default ProfilePage