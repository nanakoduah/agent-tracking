import React from 'react';
import PropTypes from 'prop-types';

import './DashboardComponent.css';

import { kpiData, agentsData } from './data';
import KPIBar from '../kpi-bar';
import GMap from '../gmap';
import Agents from '../agents';
import { agentShape, KPIShape } from '../common-props';

const DashboardComponent = ({ kpis, agents }) => (
  <div className="dashboard">
    <div className="dashboard__kpi-container">
      <KPIBar kpis={kpis} />
    </div>
    <div className="dashboard__agent-map-wrapper">
      <div className="dashboard__agents-container gl__container">
        <Agents agents={agents} />
      </div>
      <div className="gl__container dashboard__map-container">
        <GMap agents={agents} />
      </div>
    </div>
  </div>
);

DashboardComponent.defaultProps = {
  kpis: kpiData,
  agents: agentsData
};

DashboardComponent.propTypes = {
  kpis: PropTypes.arrayOf(KPIShape),
  agents: PropTypes.arrayOf(agentShape)
};

export default DashboardComponent;
