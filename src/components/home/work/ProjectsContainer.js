import React, { Component } from 'react';

import Project from "./Project"

import "./projectsContainer.css"

export default class ProjectsContainer extends Component {
    render () {

        const { projects } = this.props;

        return (
            <div className="projects-container">
                { projects.map( project => <Project key={project.name} project={project} /> ) }
            </div>
        );
    }
}