import React from 'react';

import './DashboardComponent.css';

import { kpiData } from './data';
import KPIBar from '../kpi-bar';

const DashboardComponent = () => (
  <div className="dashboard">
    <KPIBar kpis={kpiData} />
  </div>
);

export default DashboardComponent;
