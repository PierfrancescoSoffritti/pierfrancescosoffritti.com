import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import "./projectDetails.css";

import ReactGA from 'react-ga';

class ProjectDetails extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        
        const logPageView = () => {
            ReactGA.set({ page: window.location.pathname + window.location.search });
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
        logPageView();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        if(event.keyCode === 27)
            this.close();
    }

    close = () => {
        this.props.history.push("");

        const logPageView = () => {
            ReactGA.set({ page: window.location.pathname + window.location.search });
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
        logPageView();
    }

    render () {
        const projectId = this.props.location.pathname.substring(1);
        const project = this.props.projects.find( project => project.id === projectId);

        return (
            <div className="project-details-dialog-container margin home-section">
                <div className="project-details-navigate-back-button padding clickable text-unselectable" onClick={this.close}> 
                    <i className="fa fa-arrow-left project-details-icon" aria-hidden="true" /><span>show all projects</span>
                </div>
                { project ? <ProjectDetailsCard project={project} /> : <div className="project-not-found">Ouch, the project you are looking for doesn't exist .. yet!</div> }
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
                <div className="project-details-subtitle">{project.subtitle}</div>

                <div className="project-details-description"><MultilineText text={project.description} /></div>
                
                <div className="project-details-main-links">{project.links.map( link => ( 
                    <a className="project-details-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={link.icon +" project-details-icon"} aria-hidden="true" />
                        <span>{link.name}</span>
                    </a> ))}
                </div>
                <div className="project-details-secondary-links">{project.secondaryLinks.map( link => ( 
                    <a className="project-details-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={link.icon +" project-details-icon"} aria-hidden="true" />
                        <span>{link.name}</span>
                    </a> ))}
                </div>

            </div>

        </div>
    )
}

const MultilineText = ({text}) => {
    return (
        <div>
            { text.split("<br/>").map( (textLine, index) => <span key={index} >{textLine}<br/></span> ) }
        </div>
    );
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default withRouter(connect(mapStateToProps)(ProjectDetails));