import { useEffect, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import Layout from '../components/Layout'

const ProfilePage = () => {

  const { logout } = useContext(SessionContext)
  const { isLoggedIn } = useContext(SessionContext)
  const profileToEdit = useContext('')

  const [profile, setProfile] = useState({})
  const { profileId } = useParams()


  const fetchProfile = async () => {
    try {
      const response = await fetch(`http://localhost:5005/profile/${_id}`)
      if (response.status === 200) {
        const parsed = await response.json()
        setProfile(parsed)
      }
    }
    catch(err){
      console.err(err)
    }
  }

  useEffect(() => {
    fetchProfile()
  },[profileId])   


  return (    
  <Layout>
    <h1>Profile</h1>
     <Link to='/profile'> 
      <button type='button'>Edit</button> 
     </Link>
      <button type='button' onClick={logout}> Log Out</button>
    </Layout>
  )
}
    


export default ProfilePage