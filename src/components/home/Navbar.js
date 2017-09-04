import React from 'react';

import "./navbar.css"

const Navbar = ({elements, currentSection, currentScroll}) => {

        const className = currentScroll === 0 ? "" : "elevated";

        return (
            <div>
                <div className={"navbar navbar-dimensions " +className} >
                    { elements.map( element => {
                            if(element.name === currentSection)
                                return <a key={element.name} className="navbar-item navbar-item-dimensions">{element.name}</a>
                            else    
                                return <span key={element.name} className="navbar-item navbar-item-dimensions">{element.name}</span>
                        }
                    )}
                    
                    {/* <span className="navbar-item navbar-item-dimensions">about</span>
                    <span className="navbar-item navbar-item-dimensions">work</span>
                    <span className="navbar-logo">logo</span>
                    <span className="navbar-item navbar-item-dimensions">blog</span>
                    <span className="navbar-item navbar-item-dimensions">contact</span> */}
                </div>
                <div className="navbar-dimensions"/>
            </div>
        );
    
}

export default Navbar;