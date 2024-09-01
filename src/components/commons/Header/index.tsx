import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Container from '../Container';

const Header: React.FC = () => (
  <header className="header">
    <Container>
      <div className="header-wrapper">
        <nav className="nav">
          <Link className="nav-item" to="/">Events</Link>
          <Link className="nav-item" to="/my-bookings">My Bookings</Link>
        </nav>
        <Link className="user-icon" to="/user-detail">👤</Link>
      </div>
    </Container>
  </header >
);

export default Header;