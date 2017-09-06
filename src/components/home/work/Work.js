import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

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
        const activeLabels = this._addRemoveLabel( label, this.state.activeLabels );
        this.setState( { activeLabels } );
    }

    clearSelectedLabels  = () => {
        this.setState( { activeLabels: [] } );
    }

    onProjectClick = projectId => {
        this.props.history.push(projectId)
    }

    _addRemoveLabel = (label, activeLabels) => {
        const index = activeLabels.indexOf(label);
        if( index > -1 )
            activeLabels.splice(index, 1);
        else
            activeLabels.push(label);

        return activeLabels;
    }

    _getAllLabelsFromProjects = projects => {
        const labels = new Set();
        projects.forEach( project => project.labels.forEach( label => labels.add(label) ) );
        return labels;
    }

    render () {      
        const { projects } = this.props;
        const { activeLabels } = this.state;

        const labels = this._getAllLabelsFromProjects(projects);
        return (
            <div className="home-section work-container">
                <div className="labels-work" >
                    <LabelsContainer labels={labels} activeLabels={activeLabels} onLabelClick={this.onLabelClick} clearSelectedLabels={this.clearSelectedLabels}/>
                </div>
                <div className="project-container-work">
                    <ProjectsContainer projects={projects} activeLabels={activeLabels} projectClick={this.onProjectClick} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default withRouter(connect(mapStateToProps)(Work));