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
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BreakpointProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route
            path="/artists/add"
            element={
              <PrivateRoute>
                <AddArtistPage />
              </PrivateRoute>
            }
          />
          <Route path="/artists/:id" element={<DetailArtistPage />} />
          <Route
            path="/artists/update/:id"
            element={
              <PrivateRoute>
                <UpdateArtistPage />
              </PrivateRoute>
            }
          />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/events/add"
            element={
              <PrivateRoute>
                <AddEventPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/events/update/:id"
            element={
              <PrivateRoute>
                <UpdateEventPage />
              </PrivateRoute>
            }
          />
          <Route path="/events/:id" element={<OneEventPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BreakpointProvider>
  );
}

export default App;
