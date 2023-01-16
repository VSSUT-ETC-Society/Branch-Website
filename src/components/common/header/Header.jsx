import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">Faculties</Link>
            </li>
            <li>
              <Link to="/team">Students</Link>
            </li>
            <li>
              <Link to="/pricing">Projects</Link>
            </li>
            <li>
              <Link to="/journal">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="start1">
              <div className="button">REGISTER</div>
            </div>
          </ul>
          <div className="start">
            <div className="button">LOGO</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header
