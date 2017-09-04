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
        this._updateCurrentScroll();
        this._updateCurrentSection();
    }

    _updateCurrentScroll = () => this.setState( { currentScroll: this._getCurrentScroll() } ) 
    _getCurrentScroll = () => this.navbar.getBoundingClientRect().top *-1

    _updateCurrentSection = () => {
        const { refs } = this;

        let inSection = false;
        for(let key in refs) {
            const boundingRect = refs[key].getBoundingClientRect();
            
            // this is a temporary hack. The home grids adds margin between its rows
            const offset = 1.8;

            if( boundingRect.top - this._getNavBarHeight() *offset <= 0 ) {
                this._onEnterSection(key);
                inSection = true;
            }
        }

        if(!inSection)
            this._onEnterSection("");
    }

    _onEnterSection = sectionName => this.setState( { currentSection: sectionName } )
    _getNavBarHeight = () => this.navbar.getBoundingClientRect().height

    render = () => {
        const { currentSection, currentScroll } = this.state;
        
        return (
            <div className="root-home" >
                <div ref={ element => this.navbar = element }>
                    <Navbar elements={SECTIONS} currentSection={currentSection} currentScroll={currentScroll} />
                </div>
                <div className="home-grid">
                    <Header />
                    { SECTIONS
                        .filter( section => section.component )
                        .map( section =>
                            <div key={section.name} ref={section.name}>
                                <section.component name={section.name} />
                            </div> 
                        ) }
                </div>
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