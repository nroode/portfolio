import React from 'react';

let techSkills = ['HTML', 'CSS', 'SASS/SCSS', 'JavaScript', 'React', 'APIs', 'Photoshop'];
const addtlSkills = ['JIRA', 'Bitbucket', 'Basecamp', 'Project Management', 'Data-Driven Analysis', 'Google Analytics']



function About(listItems) {



    return (
        <div className="about-container" id="section-about">
            <div className="about-section">
                <h1 className="about-section-title">About</h1>
                <hr className="line-horiz-about" />
                <div className="about-section-detail">
                    <div className="about-story">
                        <p>
                            I'm a <b>front-end developer</b> <i className="fas fa-laptop-code"></i> based out of Los Angeles, California, with a passion for <b>UI design</b> <i className="fas fa-pencil-ruler"></i> and optimizing user experience.  

                            <p>Before I built beautiful websites, I worked in Market Research where I performed <b>data analysis</b> <i className ="far fa-chart-bar"></i>
                            to help businesses <b>better understand their consumers' </b><i className="fas fa-users"></i> needs, 
                            and advised on business decisions to help them increase their <b>bottom line</b> <i className="fas fa-hand-holding-usd"></i>.</p>

                            I take a UX-focused approach in my work, as I aim to create websites with intuitive user experinces <i className="far fa-smile-beam"></i> that drive call-to-action.
                            </p>
                            <p>Check out some of my recent projects!</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skills-set">
                            <i className="fas fa-code"></i>
                            <h2 className="about-skills-title">Technology</h2>
                            
                            <ul className="about-skills-list">
                                {techSkills.map((skill) => <li className="about-skill">{skill}<span className="divider divider-about">|</span></li>)}
                            </ul>
                        </div>
                        <div className="about-skills-set">
                            <i class="fas fa-cogs"></i>
                            <h2 className="about-skills-title">Skills</h2>
                            
                            <ul className="about-skills-list">
                                {addtlSkills.map((skill) => <li className="about-skill">{skill}<span className="divider divider-about">|</span></li>)}
                            </ul>
                        </div>
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
