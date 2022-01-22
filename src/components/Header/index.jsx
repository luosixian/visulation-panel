import React, { Component } from 'react';
import './index.css'
import ShowTime from './ShowTime';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>可視化</h1>
                <ShowTime />
            </header>
        );
    }
}
