import React, { Component } from 'react';
import { connect } from 'react-redux';

import scrollToElement from 'scroll-to-element';

import { fetchProjects } from "../../redux/actions/projects";

import Navbar from "./Navbar";
import Header from "./header/Header";
import About from "./about/About";
import Work from "./work/Work";
// import Blog from "./blog/Blog";
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

    scrollToSection = sectionName => {
        const element = this.refs[sectionName]

        // temporary hack, will implement a section in the page, dont have time to do it right now
        if(sectionName === "blog") {
            var win = window.open("https://medium.com/@soffritti.pierfrancesco/latest", '_blank');
            win.focus();
        }            
        // ----

        if(!element) return;

        scrollToElement(element, {
            offset: (this._getNavBarHeight()-1)*-1,
            ease: 'inOutQuad',
            duration: 600
        });
    }

    _updateCurrentScroll = () => this.setState( { currentScroll: this._getCurrentScroll() } ) 
    _getCurrentScroll = () => this.navbar.getBoundingClientRect().top *-1

    _updateCurrentSection = () => {
        const { refs } = this;

        let inSection = false;
        for(let key in refs) {
            const boundingRect = refs[key].getBoundingClientRect();

            if( boundingRect.top - this._getNavBarHeight() <= 0 ) {
                this._onEnterSection(key);
                inSection = true;
            }
        }

        if(this._isScrollBottom()) {
            this._onEnterSection("contact");
            inSection = true;
        }

        if(!inSection)
            this._onEnterSection("");
    }

    _isScrollBottom = () => document.body.scrollHeight === document.body.scrollTop + window.innerHeight;
    _onEnterSection = sectionName => this.setState( { currentSection: sectionName } )
    _getNavBarHeight = () => this.navbar.getBoundingClientRect().height

    render = () => {
        const { currentSection, currentScroll } = this.state;
        
        return (
            <div className="root-home" >
                <div ref={ element => this.navbar = element }>
                    <Navbar items={SECTIONS} onItemClick={this.scrollToSection} currentSection={currentSection} currentScroll={currentScroll} />
                </div>
                <Header />
                { SECTIONS
                    .filter( section => section.component )
                    .map( section =>
                        <div key={section.name} ref={section.name}>
                            <section.component name={section.name} />
                        </div> 
                    ) }
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