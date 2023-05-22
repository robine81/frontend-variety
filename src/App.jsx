import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import { Breakpoint, BreakpointProvider } from "react-socks";
import EventsPage from "./pages/Events/EventsPage";
import AddEventPage from "./pages/Events/AddEventPage";
import OneEventPage from "./pages/Events/OneEventPage";
import UpdateEventPage from "./pages/Events/UpdateEventPage";

function App() {
  return (
    <BreakpointProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/add" element={<AddEventPage />} />
        <Route path="/events/update/:id" element={<UpdateEventPage />} />
        <Route path="/events/:id" element={<OneEventPage />} />

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
    </BreakpointProvider>
  );
}

export default App;
