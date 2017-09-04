import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from "../../redux/actions/projects";

import Navbar from "./Navbar";
import Header from "./header/Header";
import About from "./about/About";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

import "./home.css"


const SECTIONS = [
    {
        name: "about",
        component: About
    },
    {
        name: "work",
        component: Work
    },
    {
        name: "blog",
        component: null
    },
    {
        name: "contact",
        component: Contact
    }
]   

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { currentScroll: 0, currentSection: "" };
        this.elements = SECTIONS.filter( section => section.component ).map( section => section.component );
    }

    componentWillMount = () => {
        this.props.fetchProjects()
    }

    componentDidMount = () => {        
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const scrollTop = this.toolbar.getBoundingClientRect().top *-1
        this.setState({ currentScroll: scrollTop });
        
        let inSection = false;
        for(let key in this.refs) {
            const element = this.refs[key];
            const boundingRect = element.getBoundingClientRect();
            
            if(boundingRect.top-100 < 0) {
                this.onSectionEnter(key);
                inSection = true;
            }
        }

        if(!inSection)
            this.onSectionEnter("");
    }

    onSectionEnter = sectionName => {
        this.setState( { currentSection: sectionName } )
    }

    render = () => {
        const {currentSection, currentScroll } = this.state;
        
        return (
            <div className="root-home" ref={ element => this.root = element } >
                <div ref={ element => this.toolbar = element }><Navbar elements={SECTIONS} currentSection={currentSection} currentScroll={currentScroll} /></div>
                <Header />
                { SECTIONS
                    .filter( section => section.component )
                    .map( section => <div key={section.name} ref={section.name}><section.component name={section.name} onEnter={this.onSectionEnter} /></div> ) }
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);