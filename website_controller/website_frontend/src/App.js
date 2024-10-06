import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewportAwareNavbar from "./components/navbar/ViewportAwareNavbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import EventsPage from "./pages/EventsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <Router>
      <ViewportAwareNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
