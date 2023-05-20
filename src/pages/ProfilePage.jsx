import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import Layout from '../components/Layout'



const ProfilePage = () => {
    const { logout } = useContext(SessionContext)
    const { isLoggedIn } = useContext(SessionContext)
    const profileToEdit = useContext('')


  return (
      <Layout>
        <h1>My Profile</h1>
        <button type="button">Edit</button>
        <button type='button' onClick={logout}>Logout</button> 
      </Layout>
  )
}

export default ProfilePage