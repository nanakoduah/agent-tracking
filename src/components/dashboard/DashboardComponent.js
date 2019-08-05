import React from 'react';
import PropTypes from 'prop-types';

import './DashboardComponent.css';

import { kpiData, agentsData } from '../../__mocks__/data';
import KPIBar from '../kpi-bar';
import GMap from '../gmap';
import Agents from '../agents';
import { agentShape, KPIShape } from '../common-props';

const DashboardComponent = ({
  kpis,
  agents,
  selectedAgents,
  onAgentSelectionChange
}) => (
  <div className="dashboard">
    <div className="dashboard__kpi-container">
      <KPIBar kpis={kpis} />
    </div>
    <div className="dashboard__agent-map-wrapper">
      <div className="dashboard__agents-container gl__container">
        <Agents
          agents={agents}
          onAgentSelectionChange={onAgentSelectionChange}
        />
      </div>
      <div className="gl__container dashboard__map-container">
        <GMap agents={selectedAgents} />
      </div>
    </div>
  </div>
);

DashboardComponent.propTypes = {
  kpis: PropTypes.arrayOf(KPIShape),
  agents: PropTypes.arrayOf(agentShape),
  selectedAgents: PropTypes.arrayOf(agentShape),
  onAgentSelectionChange: PropTypes.func.isRequired
};

DashboardComponent.defaultProps = {
  kpis: kpiData,
  agents: agentsData
};

export default DashboardComponent;
