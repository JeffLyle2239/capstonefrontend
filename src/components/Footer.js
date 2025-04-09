import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../style/footer.css'


const ComponentName = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <NavLink
                    to="/" className='brand-logo'>the Gilded Leash
                </NavLink>


                <ul className="footer-links">
                    <li><Link to="/Vision">the Vision</Link></li>
                    <li><Link to="/Actors">the Actors</Link></li>
                    <li><Link to="/Service">the Service</Link></li>
                    <li><Link to="/Gallery">the Gallery</Link></li>
                    <li><Link to="/Gallery">Pricing</Link></li>
                </ul>

                <ul className="footer-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-github"></a>
                </ul>

                <p className="footer-copyright">© Copyright 2021, All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default ComponentName;