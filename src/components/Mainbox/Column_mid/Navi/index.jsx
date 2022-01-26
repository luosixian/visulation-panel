import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navi extends Component {
    render() {
        return (
            <div className='Navi'>
                <h2>
                    全国の人口変動の増減率分析
                </h2>
                <div className="Navi-button">
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) =>
                                "list-group-item" + (isActive ? " navActive" : "")
                            } to="/prespread">感染拡大以前との比較</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                "list-group-item" + (isActive ? " navActive" : "")
                            } to="/preday">前日との比較</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="Navi-info"></div>
            </div>
        );
    }
}
