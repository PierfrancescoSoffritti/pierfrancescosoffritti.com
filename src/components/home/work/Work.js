import React, { Component } from 'react';
import { connect } from 'react-redux';

import LabelsContainer from "./LabelsContainer"
import ProjectsContainer from "./ProjectsContainer"


import "../../_common/common.css"
import "./work.css"

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = { activeLabels: [] }
    }

    render () {
        const { projects } = this.props;

        const labels = new Set();
        projects.forEach( project => project.labels.forEach( label => labels.add(label) ) );

        return (
            <div className="home-section work-container">
                <div className="labels-work" ><LabelsContainer labels={ labels } /></div>
                <div className="project-container-work"><ProjectsContainer projects={projects} /></div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default connect(mapStateToProps)(Work);