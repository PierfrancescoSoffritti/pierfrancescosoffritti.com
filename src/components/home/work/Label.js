import React from 'react';

import "./label.css"

const Label = ( {label, selected, minimalStyle, commonAction, onClick} ) => {

    let className;
    
    if(minimalStyle)
        className = "label-minimal";
    else if(commonAction) {
        className = "label common-label "
        if(selected)
            className += "common-label-selected";
    } else {
        className = "label special-label "
        if(selected)
            className += "special-label-selected";
    }

    return (
        <label className={className} onClick={ ev => onClick(label) }>{label}</label >    
    );
}

export default Label;