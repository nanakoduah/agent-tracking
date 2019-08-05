import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { agentShape } from '../../common-props';

class TableContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
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
    primaryField: PropTypes.string.isRequired
  };

  state = {
    data: [],
    selectedData: [],
    checkAll: false
  };

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    const data = this.props.data.map(item => ({ ...item, checked: false }));
    this.setState({ data });
  };

  hendleCheckAll = checked => {
    const data = this.state.data.map(item => ({
      ...item,
      checked
    }));

    const selectedData = checked ? data : [];
    this.setState({ data, selectedData, checkAll: checked });
  };

  handleSingleCheck = (checked, index) => {
    const { primaryField } = this.props;
    const { data, selectedData } = this.state;
    let newSelectedData = [];
    const row = data[index];
    const newValue = { ...row, checked };

    if (checked) {
      newSelectedData = [...selectedData, newValue];
    } else {
      newSelectedData = selectedData.filter(
        item => item[primaryField] !== row[primaryField]
      );
    }

    /* data array is mutated just to avoid looping
        every time and improve performance in case
        of large data
     */
    data[index] = newValue;
    this.setState({
      selectedData: newSelectedData,
      data,
      checkAll: newSelectedData.length === this.props.data.length
    });
  };

  handleRowCheck = (checked, primaryFieldValue, index) => {
    if (primaryFieldValue === 'all') {
      return this.hendleCheckAll(checked);
    }

    return this.handleSingleCheck(checked, index);
  };

  render() {
    const { component: Component, columns, primaryField } = this.props;
    const { selectedData, data, checkAll } = this.state;
    return (
      <Component
        data={data}
        columns={columns}
        selectedData={selectedData}
        primaryField={primaryField}
        checkAll={checkAll}
        onRowCheck={this.handleRowCheck}
      />
    );
  }
}

export default TableContainer;
