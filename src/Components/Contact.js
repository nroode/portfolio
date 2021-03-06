import React from 'react';

function Contact() {
    return (
        <div className="contact-container" id="section-contact">
            <div className="projects-section">
                <div>
                    <div className="contact-section-action">
                        <p>Need help with a project? Get in touch with me!</p>
                    </div>
                    <div className="contact-section-links">
                        <a href="mailto:nroode@gmail.com"><i className="fas fa-envelope"></i>nroode@gmail.com</a>
                        <a href="https://github.com/nroode" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>github.com/nroode</a>
                        <a href="https://www.linkedin.com/in/natalie-roode-2b19628/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i>LinkedIn</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;

