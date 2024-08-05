import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3 className="fw-bold text-dark">
              Krishna<span className="text-primary">Halls</span>
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/hostels">Halls</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/facilities">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">Contact</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link to="/login" className="btn btn-warning me-2">Login</Link>
                {/* <Link to="/register" className="btn btn-primary">Sign Up</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
