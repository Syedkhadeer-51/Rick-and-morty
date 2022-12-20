import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link to="/" className="text-center nunito mt-4 mb-2 text-white fs-3 navbar-brand d-flex align-items-center">
        <img src='/assets/rick-and-morty-png.png' className='img-fluid rm-logo'/>
        <span className='text-white'>Rick & Morty</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Characters</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/episodes">Episodes</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/location">Location</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar