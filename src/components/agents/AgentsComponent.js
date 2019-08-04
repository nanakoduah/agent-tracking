import React from 'react';
import PropTypes from 'prop-types';

import './AgentsComponent.css';

import { Table } from '../common';
import { agentShape } from '../common-props';
import { AGENTS_TABLE_COLUMNS } from '../../__mocks__/data';

const AgentsComponent = ({ agents }) => (
  <div className="agents gl_container">
    <Table
      data={agents}
      columns={AGENTS_TABLE_COLUMNS}
      primaryField="agentCode"
    />
  </div>
);

AgentsComponent.propTypes = {
  agents: PropTypes.arrayOf(agentShape)
};

export default AgentsComponent;
