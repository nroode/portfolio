import React from 'react';
import Project from './Project.js';

import BetterGroceriesPublic from './ProjectImages/BetterGroceriesPublic.png';
import BetterGroceriesAdmin from './ProjectImages/BetterGroceriesAdmin.png';

import ChinguProd1 from './ProjectImages/ChinguProd1.png';
import ChinguProd2 from './ProjectImages/ChinguProd2.png';

let featuredProjects = [
    {
        title: 'Better Groceries',
        role: 'Developer',
        affiliation: "Philosophie Group Inc. - Product for Good",
        subTitle: 'the vegan food finder',
        tech: ['React.js', 'Styled Components', 'Unstated', 'PostgreSQL',],
        description: 'Developed for Better Eating International.  This app helps transitioning vegans, through education on vegan alternatives and makes shopping for vegan products easier by identifying products available at local stores.  Web app includes a public view for product searches and an admin view where administrators can add new products to the database.',
        github: false,
        githubLink: '',
        liveDemo: 'https://staging--better-groceries.netlify.com/',
        image: BetterGroceriesPublic,
        imageSecondary: BetterGroceriesAdmin,
        colorSecondary: 'project-demo-btn accent-blue',

    },
    {
        title: 'Productivity App',
        role: 'Designer + Developer + PM',
        affiliation: "Chingu Developer Network",
        subTitle: '',
        tech: ['HTML', 'CSS', 'Vanilla JavaScript',],
        description: 'This productivity app is a go-to source for daily weather and top news stories.  Keep track of tasks in the to-do list and enjoy some classical music while working.  The app also displays the current date and time and each time the app is opened, a beautiful new image is displayed (courtesy of Unsplash).',
        github: true,
        githubLink: 'www.facebook.com',
        liveDemo: 'https://staging--better-groceries.netlify.com/',
        image: ChinguProd1,
        imageSecondary: ChinguProd2,
        colorSecondary: 'project-demo-btn accent-blue',

    },


]

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-section">
                <h1 className="projects-section-title">Projects</h1>
                <hr className="line-horiz-projects" />
                <div>
                {featuredProjects.map((project, i)=> 
                    <Project
                    featuredProjects={{...featuredProjects[i]}}
                     />
                )}
                    
                </div>

            </div>
        </div>
    )
}

export default Projects;


// title={featuredProjects[i].title}
                    // role={featuredProjects[i].role}
                    // affiliation={featuredProjects[i].affiliation}
                    // subTitle={featuredProjects[i].subTitle}
                    // tech={featuredProjects[i].tech}
                    // description={featuredProjects[i].description}
                    // github={featuredProjects[i].github}
                    // githubLink={featuredProjects[i].githubLink}
                    // liveDemo={featuredProjects[i].liveDemo}
                    // image={featuredProjects[i].image}
                    // colorSecondary={featuredProjects[i].colorSecondary}
                    // imageSecondary={featuredProjects[i].imageSecondary}
