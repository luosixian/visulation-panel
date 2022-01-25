import React, { Component } from 'react';
import Navi from './Navi'
import Population from './Population'

export default class ColumnMid extends Component {
    render() {
        return (
            <div className="column">
                <Navi />
                <Population />
            </div>
        );
    }
}
