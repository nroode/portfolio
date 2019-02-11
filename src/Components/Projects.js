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
        subTitle: '[ the vegan food finder ]',
        tech: ['React.js', 'Styled Components', 'Unstated', 'PostgreSQL',],
        description: 'Developed for Better Eating International, the Better Groceries app was created to help transitioning vegans.  This app serves as a source of education on vegan alternatives and makes shopping for vegan products easier by connecting users with product locators.  Web app includes a public view for product searches and an admin view where administrators can add new products to the database or update current product information.',
        github: false,
        githubLink: '',
        liveDemo: 'https://staging--better-groceries.netlify.com/',
        image: BetterGroceriesPublic,
        imageSecondary: BetterGroceriesAdmin,
        projClass: "bg-project",

    },
    {
        title: 'Dragon',
        role: 'Developer + PM',
        affiliation: "Chingu Developer Network",
        subTitle: '[ a Trello clone ]',
        tech: ['React.js', 'SCSS', 'Flexbox'],
        description: 'This is a clone of the popular project management app Trello.  Users can create cards for their tasks and organize these into customizable lists.  Cards can be dragged and dropped into different positions and lists based on progress.  Users also have the ability to customize the look of the board by selecting an alternate background.  Members can also be added to the board.',
        github: true,
        githubLink: 'https://github.com/chingu-voyage7/Geckos-Team-14',
        liveDemo: 'https://chingu-voyage7.github.io/Geckos-Team-14/',
        image: Dragon,
        imageSecondary: Dragon2,
        projClass: "dragon-project",

    },
    {
        title: 'Personal Dashboard',
        role: 'Designer + Developer + PM',
        affiliation: "Chingu Developer Network",
        subTitle: '[ a productivity app ]',
        tech: ['HTML', 'CSS', 'Vanilla JavaScript',],
        description: 'This productivity app is a go-to source for daily weather and top news stories.  Keep track of tasks in the to-do list and enjoy some classical music while working.  The app also displays the current date and time and each time the app is opened, a beautiful new image is displayed (courtesy of Unsplash).',
        github: true,
        githubLink: 'https://github.com/chingu-voyage5/Geckos-Team-15',
        liveDemo: 'https://chingu-voyage5.github.io/Geckos-Team-15/',
        image: ChinguProd1,
        imageSecondary: ChinguProd2,
        projClass: "prod-project",

    },


]

function Projects() {
    return (
        <div className="projects-container" id="section-projects" >
            <div className="projects-section">
                <h1 className="projects-section-title">Projects</h1>
                <hr className="line-horiz-projects"></hr>
                <div>
                {featuredProjects.map((project, i)=> 
                    <Project
                    featuredProjects={{...featuredProjects[i]}}
                    number={(i+1)}
                    name="section-projects"
                     />
                )}
                </div>
                <p className="addtl-projects">To see more of my work, check out my <a href="https://github.com/nroode" className="github-link" target="_blank">gitHub</a></p>
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

// <hr className="line-horiz-projects" />