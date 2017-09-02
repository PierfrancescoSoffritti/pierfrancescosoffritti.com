import React, { Component } from 'react';

import "./project.css"
export default class Project extends Component {
    render () {
        const { project } = this.props;

        return (
            <div className="project-card">
                <img className="project-image" alt={project.name} src={project.img} />
                <div className="info-bar">
                    {project.name}
                </div>
            </div>
        );
    }
}