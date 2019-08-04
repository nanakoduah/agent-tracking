import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TableComponent.css';

import { agentShape } from '../../common-props';
import Row from './row';

const TableComponent = ({
  styles,
  data,
  columns,
  primaryField,
  checkAll,
  onRowCheck
}) => (
  <div className={classNames('table', styles.table)}>
    <div className={classNames('table__header', styles.header)}>
      <Row
        className={styles.header}
        checked={checkAll}
        onRowCheck={onRowCheck}
        primaryFieldValue="all"
      >
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
        data.map((row, index) => (
          <Row
            key={row[primaryField]}
            className={styles.row}
            checked={row.checked}
            rowIndex={index}
            onRowCheck={onRowCheck}
            primaryFieldValue={row[primaryField]}
          >
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
  primaryField: PropTypes.string.isRequired,
  checkAll: PropTypes.bool,
  onRowCheck: PropTypes.func.isRequired
};

export default TableComponent;
