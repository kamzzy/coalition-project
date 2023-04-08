import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    return (
      <div className="mainDiv">
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1680901860/images/Logo_cnq9bp.png" alt="logo" width="30" height="24" className="d-inline-block align-text-top" /> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/history" className="nav-link" route-link>01. History</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link" route-link>02. Team</Link>
            </li>
          </ul>
        </div>
      </div>
     </nav>
      </div>
    );
}

export default Home;