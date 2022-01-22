import React, { Component } from 'react';
import PanelFooter from '../PanelFooter';
import './index.css'
import Nightingale from './Nightingale';

export default class ColumnRight extends Component {
    render() {
        return (
            <div className="column">
                <div className='panel-right'>
                    <Nightingale />
                    <PanelFooter />
                </div>
            </div>
        );
    }
}
