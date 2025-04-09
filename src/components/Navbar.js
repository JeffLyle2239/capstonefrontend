import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
        <div className="container">
            <NavLink
             to ="/" className='brand-logo'>the Gilded Leash
            </NavLink>
            <ul className='right'>
                <li><Link to="/Vision">the Vision</Link></li>
                <li><Link to="/Actors">the Actors</Link></li>
                <li><Link to="/Service">the Service</Link></li>
                <li><Link to="/Gallery">the Gallery</Link></li>
                <li><Link to="/customer">New Customer</Link></li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar