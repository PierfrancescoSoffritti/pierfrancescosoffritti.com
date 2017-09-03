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

    onLabelClick = label => {
        const { activeLabels } = this.state;

        const index = activeLabels.indexOf(label);
        if( index > -1 ) {
            activeLabels.splice(index, 1);
        } else {
            activeLabels.push(label);
        }

        this.setState( { activeLabels } );
    }

    clearSelectedLabels  = () => {
        this.setState( { activeLabels: [] } );
    }

    render () {
        const { projects } = this.props;
        const { activeLabels } = this.state;

        const labels = new Set();
        projects.forEach( project => project.labels.forEach( label => labels.add(label) ) );

        return (
            <div className="home-section work-container">
                <div className="labels-work" >
                    <LabelsContainer labels={labels} activeLabels={activeLabels} onLabelClick={this.onLabelClick} clearSelectedLabels={this.clearSelectedLabels}/>
                </div>
                <div className="project-container-work">
                    <ProjectsContainer projects={projects} activeLabels={activeLabels} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default connect(mapStateToProps)(Work);