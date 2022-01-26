import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Navi from './Navi'
import PopulationPreSpread from './PopulationPreSpread'
import PopulationDay from './PopulationPreDay'

export default class ColumnMid extends Component {
    render() {
        return (
            <div className="column">
                <Navi />
                <Routes>
                    <Route path="/prespread" element={<PopulationPreSpread />} />
                    <Route path="/preday" element={<PopulationDay />} />
                    <Route path="*" element={<Navigate to="/prespread" />} />
                </Routes>
            </div>
        );
    }
}
