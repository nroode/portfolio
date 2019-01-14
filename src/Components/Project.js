import React, { Component } from 'react';
import BetterGroceriesPublic from './ProjectImages/BetterGroceriesPublic.png';
import BetterGroceriesAdmin from './ProjectImages/BetterGroceriesAdmin.png';
// import { prependOnceListener } from 'cluster';


export default class Project extends Component {
    render() {
        return (
            <div className="project-container">
                
                    <div className="project-section-left">
                        <div className="project-images">
                            <img src={this.props.featuredProjects.image} className="project-image"></img>
                            <img src={this.props.featuredProjects.imageSecondary} className="project-image"></img>
                        </div>
                    </div>
                

                <div className="project-section-right">
                    <div>

                        <h2 className="project-title">{this.props.featuredProjects.title}</h2>
                        <h3 className="project-subtitle">{this.props.featuredProjects.subTitle}</h3>
                        <p className="project-role">Role:  {this.props.featuredProjects.role}</p>
                        <p className="project-context">Context:  {this.props.featuredProjects.affiliation}</p>
                    </div>
                    <div>
                        <p className="project-description">{this.props.featuredProjects.description}</p>
                        <p className="project-tech">{this.props.featuredProjects.tech.map((skill) => <span className="tech-skill">{skill}<span className="divider">|</span></span>)}</p>
                    </div>
                    <div className="project-link-btns">
                        <button className={this.props.featuredProjects.colorSecondary}><a target="_blank" rel="noopener noreferrer" href={this.props.featuredProjects.liveDemo}>Demo</a></button>
                        {this.props.featuredProjects.github ?
                            <button className={this.props.featuredProjects.colorSecondary}><a target="_blank" rel="noopener noreferrer" href={this.props.featuredProjects.githubLink}>GitHub</a></button> :
                            ''}
                    </div>

                </div>
            </div>
        )

    }
}

// export default Project;