import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchProjects } from "../../redux/actions/projects";

class Home extends Component {

    componentWillMount() {
        this.props.fetchProjects()
    }

    render () {
        return (
            <div>Home</div>
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