// import React from 'react'
import img from '../../../assets/2.png'
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div
        className="navbar navbar-expand-lg navbar-light "
        style={{ width: "85%", margin: "auto" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src={img}
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                شقق <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                منازل سكنيه 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text"></span>
        </div>
      </div>
    </nav>
  );
}
