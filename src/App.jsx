import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ArtistsPage from './pages/ArtistsPage'
import AddArtistPage from './pages/AddArtistPage'
// import ProfilePage from './pages/ProfilePage'
// import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Routes>
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/artists' element={<ArtistsPage />} />
      <Route path='/add' element={<AddArtistPage />} />

      {/* <Route
        path='/profile'
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  )
}

export default App