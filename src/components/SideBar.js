import React from 'react';
import './styles/SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">
       <img src="icon.png" alt="Logo" />
       <h2><span>Creating</span><span> an </span><span>Account</span></h2>

      <p>Already have an Account?<Link to="/login">Login</Link></p>
    </div>
  );
}

export default SideBar;