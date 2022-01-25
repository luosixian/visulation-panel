import React, { Component } from 'react';

export default class Navi extends Component {
    render() {
        return (
            <div className='Navi'>
                <h2>
                    全国の人口変動の増減率分析
                </h2>
                <div className="Navi-button">
                    <ul>
                        <li>12</li>
                        <li>12412</li>
                    </ul>
                </div>
                <div className="Navi-info"></div>
            </div>
        );
    }
}
