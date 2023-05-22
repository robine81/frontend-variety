import { useLocalStorage } from '@mantine/hooks'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage({ key: 'authToken' })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const verifyToken = async currentToken => {
    const response = await fetch('http://localhost:5005/auth/verify', {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
  
    if (response.ok) {
      const parsed = await response.json()
      setToken(currentToken)
      setIsLoggedIn(true)
 
    }
     setIsLoading(false)
  }

  useEffect(() => {
    const localToken = localStorage.getItem('authToken')
    if (localToken) {
      verifyToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token)
  
      setIsLoading(false)
    } else {
      localStorage.removeItem('authToken')
    }
  }, [token])

  const logout = () => {
    setToken()
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <SessionContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggedIn, isLoading, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider