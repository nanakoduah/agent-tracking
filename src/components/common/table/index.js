import React from 'react';

import TableComponent from './TableComponent';
import TableContainer from './TableContainer';

const Table = props => <TableContainer component={TableComponent} {...props} />;

export default Table;
