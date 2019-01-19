import React from 'react';

function Navigation() {
    return (
        <div className="nav">
        <div className="nav-container">
            <div className="nav-logo-container">
                <div className="logo">NR</div>
            </div>
            <div className="nav-section-links">
                <p className="nav-section"><a href="#header">Home</a></p>
                <p className="nav-section"><a href="#section-about">About</a></p>
                <p className="nav-section"><a href="#section-projects">Projects</a></p>
                <p className="nav-section"><a href="#section-contact">Contact</a></p>
            </div>
        </div>
        </div>
    )
}

export default Navigation;