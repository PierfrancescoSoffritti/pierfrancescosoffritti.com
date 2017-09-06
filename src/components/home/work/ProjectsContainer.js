import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Project from "./Project"

import "./projectsContainer.css"

const ProjectsContainer = ( { projects, activeLabels, projectClick } ) => { 
    
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
        <TransitionGroup className="projects-container">                          
                { projects.filter( filterActiveProjects ).map( project => 

                    <CSSTransition
                        key={project.name}
                        classNames='project-fade'
                        timeout={{ enter: 300, exit: 300 }} >

                            <Project key={project.name} project={project} onClick={projectClick} />

                    </CSSTransition>
                ) }
        </TransitionGroup>
    );
}

export default ProjectsContainer;