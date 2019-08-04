import React from 'react';
import PropTypes from 'prop-types';

import './AgentsComponent.css';

import { Table } from '../common';
import { agentShape } from '../common-props';

const TABLE_COLUMNS = [
  { field: 'agentCode', label: 'Agent Code' },
  { field: 'agentName', label: 'Agent Name' }
];

const AgentsComponent = ({ agents }) => (
  <div className="agents gl_container">
    <Table data={agents} columns={TABLE_COLUMNS} identityField="agentCode" />
  </div>
);

AgentsComponent.propTypes = {
  agents: PropTypes.arrayOf(agentShape)
};

export default AgentsComponent;
