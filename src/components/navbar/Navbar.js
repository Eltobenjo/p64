import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"
//import logo from '../../images/logo6.png'

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <nav className="logo"></nav>
      </Link>

      <nav className="nav_link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar