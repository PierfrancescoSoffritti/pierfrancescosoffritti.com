import React from 'react';

import Label from "./Label"

import "./labelsContainer.css"

const LabelsContainer = ( {labels, activeLabels, onLabelClick, clearSelectedLabels} ) => {        
    const labelsArray = [];
    for (let item of labels) labelsArray.push(item);

    return (
        <div className="labels-container text-unselectable">
            <Label label="show all" selected={activeLabels.length === 0} onClick={clearSelectedLabels} />
            { labelsArray.map(label => <Label commonAction="true" key={label} label={label} selected={activeLabels.includes(label) } onClick={onLabelClick} />) }
        </div>
    );
}

export default LabelsContainer;