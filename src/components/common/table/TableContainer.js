import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };
  state = {};

  render() {
    const { component: Component } = this.props;
    return <Component />;
  }
}

export default TableContainer;
