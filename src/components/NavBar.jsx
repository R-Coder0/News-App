import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ()=>{

    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Business">Businesss</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Entertainment">Entertainment</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Health">Health </NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Science">Science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/General">General </NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Sports">Sports </NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Technology">Technology</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )

    }

export default NavBar
