import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Signup";
import Hostels from "./components/Halls/Halls";
import HostelDetails from "./components/Halls/HallDetails";
import Gallery from "./components/home/Gallery";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import BookingForm from "./components/home/BookingForm";
import BookedHalls from "./components/home/BookedHalls";
import AdminPanel from "./components/admin/AdminPanel"; // Import the AdminPanel component
import UserPanel from "./components/user/UserPanel"; // Import the UserPanel component
import "./style/Main.css";
import "./App.css";

function App() {
  const user = useSelector(state => state.auth.user);
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/hostel/:id" element={<HostelDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/bookedhall" element={<BookedHalls />} />
        {user && user.role === 'admin' && (
          <Route path="/admin/*" element={<AdminPanel />} />
        )}
        {user && user.role === 'user' && (
          <Route path="/user/*" element={<UserPanel />} />
        )}
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
