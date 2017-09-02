import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from "../../redux/actions/projects";

import Navbar from "./Navbar";
import Header from "./header/Header";
import About from "./about/About";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import GetInTouch from "./getInTouch/GetInTouch";

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { currentScroll: 0 };
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
        let scrollTop = event.srcElement.scrollTop;
        this.setState({ currentScroll: scrollTop });
    }

    render = () => {
        return (
            <div className="root-home" ref={ element => this.root = element } >
                <Navbar currentScroll={this.state.currentScroll} />
                <Header />
                <About />
                <Work />
                <Blog />
                <GetInTouch />
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