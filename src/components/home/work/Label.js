import React from 'react';

import "./label.css"

const Label = ( {label, selected, minimalStyle, isCommon, onClick = event => event } ) => {

    let className;
    
    if(minimalStyle)
        className = "label-minimal";
    else if(isCommon) {
        className = "label common-label "
        if(selected)
            className += "common-label-selected";
    } else {
        className = "label special-label "
        if(selected)
            className += "special-label-selected";
    }

    return (
        <label className={className +" clickable"} onClick={ ev => onClick(label) }>{label}</label >    
    );
}

export default Label;