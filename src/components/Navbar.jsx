import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-left">
          <Link className="brand">
            <ul className="items">
              <li>
                <img
                  src="/assets/abstract-logo.svg"
                  alt="logo"
                  className="logo"
                />
              </li>
              <li>Abstract</li>
              <li>|</li>
              <li>Help Center</li>
            </ul>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/submit">
            <button className="submit">Submit a request</button>
          </Link>

          <Link to="/sign_in">
            <button className="sign-in">Sign in</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
