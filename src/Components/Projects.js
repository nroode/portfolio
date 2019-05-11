import React from 'react';
import Project from './Project.js';

import Job1 from './ProjectImages/Job1.png';
import Job2 from './ProjectImages/Job2.png';

import BetterGroceriesPublic from './ProjectImages/BetterGroceriesPublic.png';
import BetterGroceriesAdmin from './ProjectImages/BetterGroceriesAdmin.png';

import ChinguProd1 from './ProjectImages/ChinguProd1.png';
import ChinguProd2 from './ProjectImages/ChinguProd2.png';

import Dragon from './ProjectImages/Dragon.png';
import Dragon2 from './ProjectImages/Dragon2.png';

let featuredProjects = [
    
    {
        title: 'Job Shark',
        role: 'Front-End Developer + UX Designer',
        affiliation: "Chingu Developer Network",
        subTitle: '[ a job tracking app ]',
        tech: ['React.js (Hooks)', 'SCSS', 'Flexbox', 'Node', 'Express', 'MongoDB'],
        description: 'This app was created to help job seekers keep track of their progress in the job-search process.  Users are able to log in, where they can add any number of apps.  The Summary provides users with an overview of their search process and can help identify areas to focus.  The app is responsive across screen sizes.',
        github: true,
        githubLink: 'https://github.com/chingu-voyages/v8-chimeras-team-04/',
        liveDemo: 'https://chingu-job-shark.herokuapp.com/',
        image: Job1,
        imageSecondary: Job2,
        projClass: "job-project",

    },
    {
        title: 'Better Groceries',
        role: 'Developer',
        affiliation: "Philosophie Group Inc. + Better Eating International - Product for Good",
        subTitle: '[ the vegan food finder ]',
        tech: ['React.js', 'Styled Components', 'Unstated', 'PostgreSQL',],
        description: 'The Better Groceries app was created to help transitioning vegans; it makes shopping for vegan products easier by connecting users with product locators and educating on vegan alternatives.  The app includes a public view for product searches and an admin view where the database of product information can be updated.',
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
                    key={i}
                     />
                )}
                </div>
                <p className="addtl-projects">To see more of my work, check out my <a href="https://github.com/nroode" className="github-link" target="_blank" rel="noopener noreferrer">gitHub</a></p>
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