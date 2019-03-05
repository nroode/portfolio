import React from 'react';

let techSkills = ['HTML', 'CSS', 'Sass + SCSS', 'JavaScript', 'JQuery', 'React', 'git + Github', 'APIs', 'npm', 'Bootstrap', 'Flexbox', 'JIRA', 'Bitbucket', 'Basecamp', 'Photoshop'];
const addtlSkills = ['Project Management', 'Data-Driven Analysis', 'Google Analytics', 'Business Insights']

// let techSkills = ['HTML, CSS, Sass/SCSS', 'JavaScript -  JQuery, React', 'APIs', 'npm', 'Version Control -  Git/GitHub', 'Responsive Design -  Bootstrap, Flexbox', 'Issue Tracking -  JIRA, BitBucket', 'Project Management -  Basecamp, Trello, Waffle', 'UX + Design -  Moqups, Figma, Photoshop, Ilustrator'];







function About(listItems) {



    return (
        <div className="about-container" id="section-about">
            <div className="about-container-inner container">
                <div className="about-section">

                    <div className="about-section-detail">
                        <div className="about-story">
                            <h1 className="about-section-title">About</h1>
                            <p>
                                <b>I'm a creative, detail-oriented front-end developer, UX enthusiast, analytical thinker, problem-solver, life-long learner, and cat <i className="fas fa-cat"></i> lover — who likes to make things look good.</b>

                                <p>Before I built beautiful websites, I was a Market Researcher.  I spent my days working closely with data, ensuring its quality, analyzing large data sets
                                    to help businesses understand their consumers' needs,
                            and advised on business strategy.  However, I ultimately sought a career that would make greater use of my creativity.</p>

                                As a developer, I get to combine my love for understanding users and love for building, creating, and solving problems with code.
                            </p>
                            <p>Check out some of <a href="#section-projects">my recent projects!</a></p>
                        </div>
                    </div>

                </div>
                <div className="about-skills">
                    <div className="about-skills-set">
                        <h2 className="about-skills-title">[ technology ]</h2>
                        <ul className="about-skills-list">
                            {techSkills.map((skill) => <li className="about-skill">{skill}
                                {((techSkills.length - 1) !== techSkills.indexOf(skill)) ? <span className="divider divider-about">/</span> : ''}
                            </li>)}
                        </ul>
                    </div>
                    <div className="about-skills-set">
                        <h2 className="about-skills-title">[ skills ]</h2>
                        <ul className="about-skills-list">
                            {addtlSkills.map((skill) => <li className="about-skill">{skill}
                                {((addtlSkills.length - 1) !== addtlSkills.indexOf(skill)) ? <span className="divider divider-about">/</span> : ''}
                            </li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )


}

export default About;

// {backgrounds.Colors.map((newBackground) =>
//     <div className="background-options" key={newBackground}>
//         <div className="background-option--wrapper">
//             <div
//                 style={{ backgroundColor: `${newBackground}` }}
//                 className="background-options background-option"
//                 onClick={() => this.setBackground(newBackground)}
//             >
//             </div>
//         </div>
//     </div>
// )}

// <i className="fas fa-asterisk about-asterisk"></i>

// <hr className="line-horiz-about" />




// <span className="divider divider-about">/</span>