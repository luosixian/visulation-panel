import React, { Component } from 'react';
import PanelFooter from '../PanelFooter'
import Bar from './Bar';
import Pie from './Pie';
import Line from './Line';
import axios from 'axios'

export default class ColumnLeft extends Component {

    render() {
        return (
            <div className="column">
                <div className='panel'>
                    <Bar />
                    <PanelFooter />
                </div>
                <div className='panel'>
                    <Pie />
                    <PanelFooter />
                </div>
                <div className='panel'>
                    <Line />
                    <PanelFooter />
                </div>
            </div>
        );
    }
}
