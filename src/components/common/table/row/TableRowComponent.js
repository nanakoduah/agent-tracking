import React from 'react';
import PropTypes from 'prop-types';

import './TableRowComponent.css';

const TableRowComponent = ({ children }) => (
  <div className="table-row">
    <div className="table-row__check-cell">
      <input type="checkbox" />
    </div>
    {children}
  </div>
);

TableRowComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableRowComponent;
