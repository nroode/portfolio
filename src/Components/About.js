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
                            I'm a front-end developer <i className="fas fa-laptop-code"></i> and UI designer <i className="fas fa-pencil-ruler"></i> based out of Los Angeles, California.

                            Before I built beautiful websites, I worked as a market researcher where I helped businesses understand their consumers' <i className="fas fa-users"></i> needs, analyzing data <i className ="far fa-chart-bar"></i> to advise on business decisions <i className="fas fa-money-bill"></i>.

                            I take a UX-focused approach in my work, as I aim to create websites with intuitive user experinces <i className="far fa-smile-beam"></i> that drive call-to-action.
                            </p>
                            <p>Scroll down to see some of my recent projects!</p>
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
