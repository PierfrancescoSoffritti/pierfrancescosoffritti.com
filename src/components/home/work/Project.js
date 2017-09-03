import React, { Component } from 'react';

import Label from "./Label"

import "./project.css"

export default class Project extends Component {
    render () {
        const { project } = this.props;

        const className = project.highlight ? "highlight-card" : "normal-card"

        return (
            <div className={"project-card " +className}>
                <img className="project-image" alt={project.name} src={project.img} />
                <div className="info-bar">
                    <div>{project.name}</div>
                    <div>
                        { project.labels.map( label => <Label minimalStyle="true" key={label} label={label} /> ) }
                    </div>
                </div>
            </div>
        );
    }
}