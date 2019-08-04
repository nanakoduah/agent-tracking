import React from 'react';

import './DashboardComponent.css';

import { kpiData, agents } from './data';
import KPIBar from '../kpi-bar';
import GMap from '../gmap';
import Agents from '../agents';

const DashboardComponent = () => (
  <div className="dashboard">
    <div className="dashboard__kpi-container">
      <KPIBar kpis={kpiData} />
    </div>
    <div className="dashboard__agent-map-wrapper">
      <div className="dashboard__agents-container gl__container">
        <Agents />
      </div>
      <div className="gl__container dashboard__map-container">
        <GMap agents={agents} />
      </div>
    </div>
  </div>
);

export default DashboardComponent;
