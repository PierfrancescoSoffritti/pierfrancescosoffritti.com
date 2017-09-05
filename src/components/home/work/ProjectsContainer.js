import React from 'react';

import Project from "./Project"

import "./projectsContainer.css"

const ProjectsContainer = ( { projects, activeLabels } ) => { 
    projects = projects.sort( (a, b) => a.highlight < b.highlight );

    const filter = project => {
        if(activeLabels.length === 0)
            return true;

        for(let i=0; i<project.labels.length; i++) {
            const label = project.labels[i];
            if( activeLabels.indexOf(label) > -1 )
                return true;
        }

        return false;
    }

    return (
        <div className="projects-container">
            { projects.filter( filter ).map( project => <Project key={project.name} project={project} /> ) }
        </div>
    );
}

export default ProjectsContainer;