import React from 'react';

let techSkills = ['HTML', 'CSS', 'SASS/SCSS', 'JavaScript', 'JQuery', 'React', 'APIs', 'npm'];
const addtlSkills = ['JIRA', 'Bitbucket', 'Basecamp', 'Project Management', 'Photoshop', 'Data-Driven Analysis', 'Google Analytics']



function About(listItems) {



    return (
        <div className="about-container" id="section-about">
            <div className="about-section">

                <div className="about-section-detail">
                    <div className="about-story">
                        <h1 className="about-section-title">About</h1>
                        <p>
                            <b>I'm a front-end developer, UX enthusiast, creative, detail-oriented, analytical thinker, problem-solver, life-long learner, and cat <i className="fas fa-cat"></i> lover — who likes to make things look good.</b>

                            <p>Before I built beautiful websites, I worked in Market Research where I performed <b>data analysis </b>
                                to help businesses <b>better understand their consumers' </b> needs,
                            and advised on business decisions to help them increase their <b>bottom line</b>.</p>

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
                        {techSkills.map((skill) => <li className="about-skill">{skill}<span className="divider divider-about">|</span></li>)}
                    </ul>
                </div>
                <div className="about-skills-set">

                    <h2 className="about-skills-title">[ skills ]</h2>

                    <ul className="about-skills-list">
                        {addtlSkills.map((skill) => <li className="about-skill">{skill}<span className="divider divider-about">|</span></li>)}
                    </ul>
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