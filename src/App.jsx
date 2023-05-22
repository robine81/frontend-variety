import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ArtistsPage from './pages/ArtistsPage'
import AddArtistPage from './pages/AddArtistPage'
import DetailArtistPage from './pages/DetailArtistPage'
import UpdateArtistPage from './pages/UpdateArtistpage'
// import ProfilePage from './pages/ProfilePage'
// import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import HomePage from './pages/HomePage'
import  { Breakpoint, BreakpointProvider } from 'react-socks';

function App() {

  return (
    <BreakpointProvider>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/all-artists' element={<ArtistsPage />} />
      <Route path='/add-artist' element={<AddArtistPage />} />
      <Route path='/detail/:id' element={<DetailArtistPage />} />
      <Route path='/update/:id' element={<UpdateArtistPage />} />
    </Routes>
    </BreakpointProvider>
  )
}

export default App