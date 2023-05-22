import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'



const ProfilePage = () => {
    const { logout } = useContext(SessionContext)
    const { isLoggedIn } = useContext(SessionContext)
    const profileToEdit = useContext('')

    console.log("Profile logged in? ", isLoggedIn)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:5005/profile/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (response.status === 201) {
      navigate('/login')
    }

  return (
      <Layout>
        Test
        {/* <h1>My Profile</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>Edit</button>
        <button type='button' onClick={logout}>Logout</button> 
      </form> */}
      </Layout>
  )
}

export default ProfilePage