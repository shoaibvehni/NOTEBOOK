import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';

function Navbar() {
  let location = useLocation(); 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">Inotebook</Link> {/* Use Link instead of anchor tag */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/" ? "active": ""}`}  to="/" aria-current="page">Home</Link> {/* Use Link instead of anchor tag */}
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/About"?"active": ""}`} to="/About">About</Link> {/* Use Link instead of anchor tag */}
            </li>
          </ul>
         
          </div><form className="d-flex" role="search">
  <a href="/Login" className="btn btn-primary" role="button">Login</a>
  <a href="/Signup" className="btn btn-primary ms-3" role="button">Signup</a>
</form>


      </div>
    </nav>
  );
}

export default Navbar;
