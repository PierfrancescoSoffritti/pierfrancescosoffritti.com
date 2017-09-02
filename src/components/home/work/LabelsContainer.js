import React, { Component } from 'react';

import Label from "./Label"

import "./labelsContainer.css"

export default class LabelsContainer extends Component {
    render () {
        const {labels} = this.props;

        const labelsArray = [];
        for (let item of labels) labelsArray.push(item);

        return (
            <div className="labels-container">
                <Label label="show all" />
                { labelsArray.map(label => <Label key={label} label={label} />) }
            </div>
        );
    }
}