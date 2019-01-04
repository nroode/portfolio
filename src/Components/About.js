import React from 'react';

let techSkills = ['HTML', 'CSS', 'SASS/SCSS', 'JavaScript', 'React', 'APIs', 'Photoshop'];
const addtlSkills = ['JIRA', 'Bitbucket', 'Basecamp', 'Project Management', 'Data-Driven Analysis', 'Google Analytics']



function About(listItems) {



    return (
        <div className="about-container">
            <div className="about-section">
                <h1 className="about-section-title">About</h1>
                <hr className="line-horiz-about" />
                <div className="about-section-detail">
                    <div className="about-story">
                        <p>
                            I'm a front-end developer and UI designer based out of Los Angeles, California.  
                            
                            Before I built beautiful websites, I worked as a market researcher where I helped businesses understand their consumers' needs, analyzing data to advise on business decisions.

                            I take a UX-focused approach in my work, as I aim to create websites with intuitive user experinces that drive call-to-action.
                            </p>
                    </div>
                    <div className="about-skills">
                        <h2 className="about-skills-title">Technology</h2>
                        <ul className="about-skills-list">
                            {techSkills.map((skill) => <li className="about-skill">{skill}</li>)}
                        </ul>

                        <h2 className="about-skills-title">Skills</h2>
                        <ul className="about-skills-list">
                            {addtlSkills.map((skill) => <li className="about-skill">{skill}</li>)}
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
