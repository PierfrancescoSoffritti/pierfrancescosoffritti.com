import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import "./projectDetails.css"

class ProjectDetails extends Component {
    close = () => {
        this.props.history.push("");
    }

    render () {
        const projectId = this.props.location.pathname.substring(1);
        const project = this.props.projects.find( project => project.id === projectId);

        return (
            <div className="project-details-dialog-container home-section">
                { project && <ProjectDetailsCard project={project} onClick={this.close} /> }
                { !project && <div>project not found</div> }
            </div>
        );
    }
}

const ProjectDetailsCard = ({ project, onClick }) => {
    return (
        <div className="project-details-card margin" onClick={onClick} >
            <img className="project-details-image" alt={project.name} src={project.img} />
            <div>
                <div>Title</div>
                <div>Description</div>
                <div>MainLinks</div>
                <div>OtherLinks</div>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default withRouter(connect(mapStateToProps)(ProjectDetails));