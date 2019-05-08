import React from 'react';
// import Navigation from './Navigation.js';



function Header() {
    const intro = "I'm Natalie Roode";
    const introArr = intro.split('');
    introArr.forEach((char, i) => {if (char === " ") {introArr[i] = `\u00A0` }});
    // const introArr = ['I', "'", 'm', `\u00A0` , 'N', 'a', 't', 'a', 'l', 'i', 'e', '\u00A0', 'R', 'o', 'o', 'd', 'e']
    // console.log(introArr);
    const introSpan = introArr.map(letter => <div> {letter} </div>);

    return (
        <div className="header-container">
            <div className="contact-links">
                <a href="mailto:nroode@gmail.com"><i className="far fa-envelope"></i></a>
                <a href="https://github.com/nroode" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/natalie-roode-2b19628/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="header-description-container">
                <div className="header-description-links">
                    <div className="header-description">
                        <h1 className="header-hello">Hello</h1>
                        <h1 className="header-intro">{introSpan}</h1>
                        <p className="header-intro-tagline">I'm a Front-End Developer and UX Enthusiast with a passion for Design, based out of Los Angeles.  </p>
                    </div>
                    <div className="nav-section-links">
                        <p className="nav-section"><a href="#section-about">READ MY STORY</a></p><span className="header-divider">/</span>
                        <p className="nav-section"><a href="#section-projects">SEE MY WORK</a></p><span className="header-divider">/</span>
                        <p className="nav-section"><a href="#section-contact">GET IN TOUCH</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

