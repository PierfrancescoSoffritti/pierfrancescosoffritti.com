import React from 'react';

import "./navbar.css"

const Navbar = ({items, currentSection, currentScroll, onItemClick}) => {

        const className = currentScroll === 0 ? "" : "elevated";

        return (
            <div>
                <div className={"navbar navbar-dimensions " +className} >
                    { items.map( item => {
                            if(item.name === currentSection)
                                return <a key={item.name} onClick={ev => onItemClick(item.name)} className="navbar-item navbar-item-dimensions">{item.name}</a>
                            else    
                                return <span key={item.name} onClick={ev => onItemClick(item.name)} className="navbar-item navbar-item-dimensions">{item.name}</span>
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