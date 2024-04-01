import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();
let  handlelogut = ()=>{
  localStorage.removeItem('token');
  navigate("/Login");
  
}
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
              <Link className={`nav-link ${location.pathname==="/Home" ? "active": ""}`}  to="/" aria-current="page">Home</Link> {/* Use Link instead of anchor tag */}
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/About"?"active": ""}`} to="/About">About</Link> {/* Use Link instead of anchor tag */}
            </li>
          </ul>
         
          </div><form className="d-flex" role="search">
          {!localStorage.getItem('token')?<form className="d-flex">
          <Link className="btn btn-primary" to="/Login">Login</Link>
          <Link className="btn btn-primary ms-3" to="/Signup">Signup</Link>
        </form>:<button className='btn btn-primary' onClick={handlelogut}>logout</button>}
</form>


      </div>
    </nav>
  );
}

export default Navbar;
