import React from 'react';
import Project from './Project.js';

import BetterGroceriesPublic from './ProjectImages/BetterGroceriesPublic.png';
import BetterGroceriesAdmin from './ProjectImages/BetterGroceriesAdmin.png';

import ChinguProd1 from './ProjectImages/ChinguProd1.png';
import ChinguProd2 from './ProjectImages/ChinguProd2.png';

import Dragon from './ProjectImages/Dragon.png';
import Dragon2 from './ProjectImages/Dragon2.png';

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
        title: 'Dragon',
        role: 'Developer + PM',
        affiliation: "Chingu Developer Network",
        subTitle: 'a Trello clone',
        tech: ['React.js', 'SCSS'],
        description: 'This is a clone of the popular Trello app.  Users can create lists, cards and drag and drop these items.  They have the ability to customize the look of the board by selecting an alternate background.  Members can also be added to the board.',
        github: true,
        githubLink: 'https://github.com/chingu-voyage7/Geckos-Team-14',
        liveDemo: 'https://chingu-voyage7.github.io/Geckos-Team-14/',
        image: Dragon,
        imageSecondary: Dragon2,
        colorSecondary: 'project-demo-btn accent-purple',

    },
    {
        title: 'Productivity App',
        role: 'Designer + Developer + PM',
        affiliation: "Chingu Developer Network",
        subTitle: '',
        tech: ['HTML', 'CSS', 'Vanilla JavaScript',],
        description: 'This productivity app is a go-to source for daily weather and top news stories.  Keep track of tasks in the to-do list and enjoy some classical music while working.  The app also displays the current date and time and each time the app is opened, a beautiful new image is displayed (courtesy of Unsplash).',
        github: true,
        githubLink: 'https://github.com/chingu-voyage5/Geckos-Team-15',
        liveDemo: 'https://chingu-voyage5.github.io/Geckos-Team-15/',
        image: ChinguProd1,
        imageSecondary: ChinguProd2,
        colorSecondary: 'project-demo-btn accent-teal',

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
                <p>For more projects, check out my gitHub</p>
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
