import React, { Component } from 'react';
import ColumnLeft from './Column_left'
import ColumnMid from './Column_mid'
import ColumnRight from './Column_right'

export default class Mainbox extends Component {
    render() {
        return (
            <div className='mainbox'>
                <ColumnLeft />
                <ColumnMid />
                <ColumnRight />
            </div>
        );
    }
}
