import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import Project from "./Project"

import "./projectsContainer.css"

const ProjectsContainer = ( { projects, activeLabels } ) => { 
    
    projects = projects.sort( (a, b) => a.highlight < b.highlight );

    const filterActiveProjects = project => {
        if(activeLabels.length === 0)
            return true;

        return isProjectActive(project, activeLabels);
    }

    const isProjectActive = (project, activeLabels) => {
        for(let i=0; i<project.labels.length; i++) {
            const label = project.labels[i];
            if( activeLabels.indexOf(label) > -1 )
                return true;
        }

        return false;
    }

    return (        
        <CSSTransitionGroup
            className="projects-container"
            transitionName="react-animation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                { projects.filter( filterActiveProjects ).map( project => <Project key={project.name} project={project} /> ) }
        </CSSTransitionGroup>        
    );
}

export default ProjectsContainer;