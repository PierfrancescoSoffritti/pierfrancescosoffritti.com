import React from 'react';

import "./navbar.css"

import ReactGA from 'react-ga';

const Navbar = ({items, currentSection, currentScroll, onItemClick}) => {

        const className = currentScroll === 0 ? "" : "elevated";

        const onLinkClick = (itemName) => {
            ReactGA.event({
                category: 'User',
                action: 'Click on navbar item: ' +itemName
            });
        }

        return (
            <div>
                <div className={"navbar navbar-dimensions text-unselectable " +className} >
                    { items.map( item => {
                            return <span 
                                key={item.name} 
                                onClick={ev => { onItemClick(item.name); onLinkClick(item.name); } }
                                className={"navbar-item navbar-item-dimensions clickable " + ( item.name === currentSection ? "navbar-item-selected" : "" )}>{item.name}</span>
                        }
                    )}                    
                </div>
                <div className="navbar-dimensions"/>
            </div>
        );
    
}

export default Navbar;