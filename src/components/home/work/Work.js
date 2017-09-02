import React, { Component } from 'react';
import { connect } from 'react-redux';

import LabelsContainer from "./LabelsContainer"
import SortOrderSelect from "./SortOrderSelect"
import ProjectsContainer from "./ProjectsContainer"

import FillSpace from "../../_common/FillSpace"

import "../../_common/common.css"
import "./work.css"

const SORT_ORDERS = [ { key: "MOST_POPULAR", value: "MOST POPULAR"}, { key: "DATE", value: "DATE"} ]

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = { activeLabels: [], sortBy: "" }
    }

    render () {
        const { projects } = this.props;

        const labels = new Set();
        projects.forEach( project => project.labels.forEach( label => labels.add(label) ) );

        return (
            <div className="home-section work-container">          

                <div className="item" ><LabelsContainer labels={ labels } /></div>
                <FillSpace />
                <div className="item"><SortOrderSelect values={SORT_ORDERS} /></div>
                <div className="item project-container-work"><ProjectsContainer projects={projects} /></div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default connect(mapStateToProps)(Work);