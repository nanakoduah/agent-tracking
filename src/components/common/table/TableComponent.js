import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TableComponent.css';

import { agentShape } from '../../common-props';
import Row from './row';

const TableComponent = ({ styles, data, columns, identityField }) => (
  <div className={classNames('table', styles.table)}>
    <div className={classNames('table__header', styles.header)}>
      <Row className={styles.header}>
        {columns.length > 0 &&
          columns.map(({ field, label }) => (
            <div key={field} className="table__header-cell">
              {label}
            </div>
          ))}
      </Row>
    </div>
    <div className={classNames('table__body', styles.body)}>
      {data.length > 0 &&
        data.map(row => (
          <Row key={row[identityField]} className={styles.row}>
            {columns.length > 0 &&
              columns.map(({ field }) => (
                <div key={`${field}-${row[field]}`} className="table__cell">
                  {row[field]}
                </div>
              ))}
          </Row>
        ))}
    </div>
  </div>
);

TableComponent.defaultProps = {
  styles: {},
  columns: [],
  data: []
};

TableComponent.propTypes = {
  styles: PropTypes.shape({
    table: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    row: PropTypes.string
  }),
  data: PropTypes.arrayOf(agentShape),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string
    })
  ),
  identityField: PropTypes.string.isRequired
};

export default TableComponent;
