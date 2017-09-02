import React, { Component } from 'react';

import "./sortOrderSelect.css"

export default class SortOrderSelect extends Component {
    render () {
        const { values } = this.props;

        return (
            <select className="select" >
                { values.map( value => <option key={value.key} value={value.value}>{value.value}</option> ) }
          </select>
        );
    }
}