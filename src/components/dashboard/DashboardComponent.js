import React from 'react';

import './DashboardComponent.css';

import { kpiData, agents } from './data';
import KPIBar from '../kpi-bar';
import GMap from '../gmap';

const DashboardComponent = () => (
  <div className="dashboard">
    <KPIBar kpis={kpiData} />
    <div className="gl__container dashboard__map-container">
      <GMap agents={agents} />
    </div>
  </div>
);

export default DashboardComponent;
