import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
 return (
    <>
   <nav className="navbar">
     <div className="navbar-left">
       <Link to="/" className="logo">MyApp</Link>
     </div>
     <div className="navbar-center">
       <ul className="nav-links">
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
     </div>
     <div className="navbar-right">
       <Link to="/login" className="user-icon"><i className="fas fa-user"></i></Link>
     </div>
   </nav>
   </>
 );
};
export default Navbar;