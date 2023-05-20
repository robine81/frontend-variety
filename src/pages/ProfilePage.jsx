import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import Layout from '../components/Layout'


const ProfilePage = () => {
    const { logout } = useContext(SessionContext)
    const { isLoggedIn } = useContext(SessionContext)

    console.log("Profile logged: ", isLoggedIn)
  return (
    <Layout>
      <h1>ProfilePage</h1>
      <button type='button' onClick={logout}>Logout</button> 
    </Layout>
  )
}

export default ProfilePage