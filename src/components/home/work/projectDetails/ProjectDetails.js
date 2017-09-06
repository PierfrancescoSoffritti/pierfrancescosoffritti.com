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
            <div className="project-details-dialog-container margin home-section">
                <div className="project-details-navigate-back-button padding clickable text-unselectable" onClick={this.close}> 
                    <i className="fa fa-arrow-left project-details-icon" aria-hidden="true" /><span>show all projects</span>
                </div>
                { project ? <ProjectDetailsCard project={project} /> : <div className="project-not-found">project not found</div> }
            </div>
        );
    }
}

const ProjectDetailsCard = ({ project, onClick }) => {
    return (
        <div className="project-details-card" onClick={onClick} >
            <img className="project-details-image size" alt={project.name} src={project.img} />
            <div className="project-details-text padding">
                <div className="project-details-title">{project.name}</div>
                <div className="project-details-description">{project.description}</div>
                <div className="project-details-main-links">{project.links.map( link => ( 
                    <a className="project-details-link" key={link.url} href={link.url} target="blank">
                        <i className={"fa fa-" +link.icon +" fa-2x project-details-icon"} aria-hidden="true" />{link.name}
                    </a> ))}
                </div>
                <div className="project-details-secondary-links">{project.secondaryLinks.map( link => ( 
                    <a className="project-details-link" key={link.url} href={link.url} target="blank">
                        <i className={"fa fa-" +link.icon +" fa-2x project-details-icon"} aria-hidden="true" />{link.name}
                    </a> ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default withRouter(connect(mapStateToProps)(ProjectDetails));