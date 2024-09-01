import "./App.scss";
import Container from "./components/commons/Container";
import { EventBookingProvider } from "./contexts/EventBookingContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetailPage";
import BookingPage from "./pages/BookingPage";
import { CommonProvider } from "./contexts/CommonContext";
import Header from "./components/commons/Header";
import MyBookings from "./pages/MyBookingPage";
import MyBookingDetail from "./pages/BookingDetailPage";
import UserDetail from "./pages/UserDetailPage";

function App() {

  return (
    <div className="app">
      <EventBookingProvider>
        <CommonProvider>
          <Router>
            <Header />
            <Container className="main-layout">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event/:eventId" element={<EventDetail />} />
                <Route path="/booking/event/:eventId" element={<BookingPage />} />
                <Route path="/my-bookings" element={<MyBookings />} />
                <Route path="/my-bookings/:bookingId" element={<MyBookingDetail />} />
                <Route path="/user-detail" element={<UserDetail />} />
              </Routes>
            </Container>
          </Router>
        </CommonProvider>
      </EventBookingProvider>

    </div>
  );
}

export default App;
