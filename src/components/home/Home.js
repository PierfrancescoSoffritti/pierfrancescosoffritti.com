import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from "../../redux/actions/projects";

import "./home.css"

import Navbar from "./Navbar";
import Header from "./Header";
import About from "./about/About";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import GetInTouch from "./getInTouch/GetInTouch";

class Home extends Component {

    componentWillMount() {
        this.props.fetchProjects()
    }

    render () {
        return (
            <div className="root" >
                <Navbar className="navbar" />
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