import React from 'react';
import PropTypes from 'prop-types';

import './TableRowComponent.css';

const TableRowComponent = ({
  onRowCheck,
  checked,
  rowIndex,
  primaryFieldValue,
  children
}) => (
  <div className="table-row">
    <div className="table-row__check-cell">
      <input
        checked={checked}
        type="checkbox"
        onChange={evt =>
          onRowCheck(evt.target.checked, primaryFieldValue, rowIndex)
        }
      />
    </div>
    {children}
  </div>
);

TableRowComponent.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool,
  rowIndex: PropTypes.number,
  onRowCheck: PropTypes.func.isRequired,
  primaryFieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TableRowComponent;
