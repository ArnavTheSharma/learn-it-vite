import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ContactUs from './pages/contactPage/ContactUs';
import EventsPage from './pages/eventsPage/EventsPage';
import HomePage from './pages/homePage/HomePage';
import JoinUs from './pages/joinUsPage/JoinUs';
import NotFoundPage from './pages/NotFoundPage';
import TeamPage from './pages/teamPage/TeamPage';
import EventsListPage from './pages/eventsPage/EventsListPage';
// import LoginPage from './pages/LoginPage';
// import CreateAccountPage from './pages/CreateAccountPage';
 
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div id="page-body">
          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/events/" element={<EventsListPage />} />
            <Route path="/events/:eventId" element={<EventsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/our-team" element={<TeamPage />} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} /> */}
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
  