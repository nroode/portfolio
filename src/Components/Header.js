import React from 'react';
import Navigation from './Navigation.js';

function Header() {
    return (
        <div className="header-container">
            <Navigation />
            <div className="header-description-container">
                <div className="header-description">
                    <h1 className="header-intro">Hi, I'm Natalie Roode </h1>
                    <p className="header-intro-tagline">I'm a consumer insights researcher turned Web Developer, UI Designer, and UX Enthusiast.  </p>
                    <hr className="line-horiz-header" />
                    <div className="contact-links">
                        <i className="far fa-envelope"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;