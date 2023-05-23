import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ArtistsPage from "./pages/artists/ArtistsPage";
import AddArtistPage from "./pages/artists/AddArtistPage";
import DetailArtistPage from "./pages/artists/DetailArtistPage";
import UpdateArtistPage from "./pages/artists/UpdateArtistpage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import { BreakpointProvider } from "react-socks";
import EventsPage from "./pages/Events/EventsPage";
import AddEventPage from "./pages/Events/AddEventPage";
import OneEventPage from "./pages/Events/OneEventPage";
import UpdateEventPage from "./pages/Events/UpdateEventPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BreakpointProvider>
      <Layout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/artists' element={<ArtistsPage />} />
      <Route path='/artists/add' element={ <PrivateRoute> <AddArtistPage /> </PrivateRoute>}/>
      <Route path='/artists/:id' element={ <DetailArtistPage />} />
      <Route path='/artists/update/:id' element={ <PrivateRoute><UpdateArtistPage /></PrivateRoute>} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/add" element={<AddEventPage />} />
      <Route path="/events/update/:id" element={<UpdateEventPage />} />
      <Route path="/events/:id" element={<OneEventPage />} />
    </Routes>
      <Routes>
        {
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        }
      </Routes>
      </Layout>
     </BreakpointProvider>
  );
}

export default App;
