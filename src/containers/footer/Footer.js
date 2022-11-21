import React from 'react'
import "./footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="detailsBox">
        Pokoje 64<br></br> ul. 3 Maja Ustron
      </div>
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <div className="socialBox">Follow us</div>
      <Link to="/">
        <div className="facebook">
          <FaFacebookSquare size="2rem" />
        </div>
      </Link>
      <Link to="/">
        <div className="insta">
          <FaInstagramSquare size="2rem" />
        </div>
      </Link>
    </div>
  );
}

export default Footer