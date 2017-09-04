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
        this.root.addEventListener("scroll", this.handleScroll);        
    }
    
    componentWillUnmount = () => {
        this.root.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        console.log(this.root)
        let scrollTop = event.srcElement.scrollTop;
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
                <Navbar elements={SECTIONS} currentSection={currentSection} currentScroll={currentScroll} />
                <Header />
                { SECTIONS
                    .filter( section => section.component )
                    .map( section => <div ref={section.name}><section.component key={section.name} name={section.name} onEnter={this.onSectionEnter} /></div> ) }
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