import React from 'react';
import Navigation from './Navigation.js';

function Header() {
    return (
        <div className="header-container">
            <Navigation />
            <div className="header-description-container">
                <div className="header-description">
                    <h1 className="header-intro">Hi, I'm Natalie Roode </h1>
                    <p className="header-intro-tagline">I'm a Market Researcher turned Web Developer and UX Enthusiast with a passion for Design.  </p>
                    <hr className="line-horiz-header" />
                    <div className="contact-links">
                        <a href="mailto:nroode@gmail.com"><i className="far fa-envelope"></i></a>
                        <a href="https://github.com/nroode" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/natalie-roode-2b19628/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;