import React from 'react';
import PropTypes from 'prop-types';

import { kpiData, agentsData } from '../../__mocks__/data';
import { KPIShape, agentShape } from '../common-props';

class DashboardContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    kpis: PropTypes.arrayOf(KPIShape),
    agents: PropTypes.arrayOf(agentShape)
  };

  static defaultProps = {
    kpis: kpiData,
    agents: agentsData
  };

  state = {
    selectedAgents: []
  };

  handleAgentSelection = selectedAgents => this.setState({ selectedAgents });

  render() {
    const { kpis, agents, component: Component } = this.props;
    const { selectedAgents } = this.state;

    return (
      <Component
        kpis={kpis}
        agents={agents}
        selectedAgents={selectedAgents}
        onAgentSelectionChange={this.handleAgentSelection}
      />
    );
  }
}

export default DashboardContainer;
