import React from 'react';
import renderer from 'react-test-renderer';

import TableContainer from '../TableContainer';
import { agentsData, AGENTS_TABLE_COLUMNS } from '../../../../__mocks__/data';

const PRIMARY_FIELD = 'agentCode';

describe('TableContainer', () => {
  it('should initialize properly', () => {
    const tree = renderer.create(
      <TableContainer
        component={jest.fn(() => null)}
        data={agentsData}
        columns={AGENTS_TABLE_COLUMNS}
        primaryField="agentCode"
      />
    );
    expect(tree.getInstance().state).toMatchSnapshot();
  });

  it('should handle selection and deselection properly', () => {
    const component = jest.fn(() => null);
    const rowSelectionMock = jest.fn();
    const selectedRow = agentsData[2];
    const tree = renderer.create(
      <TableContainer
        component={component}
        data={agentsData}
        columns={AGENTS_TABLE_COLUMNS}
        primaryField={PRIMARY_FIELD}
        onSelectionChange={rowSelectionMock}
      />
    );

    const instance = tree.getInstance();

    const { onRowCheck } = component.mock.calls[0][0];
    // handle check
    onRowCheck(true, selectedRow[PRIMARY_FIELD], 2);
    expect(instance.state.selectedData).toEqual([
      { ...selectedRow, checked: true }
    ]);

    // handle uncheck
    onRowCheck(false, selectedRow[PRIMARY_FIELD], 2);
    expect(instance.state.selectedData).toEqual([]);

    // handle check all
    onRowCheck(true, 'all');
    expect(instance.state.selectedData.length).toEqual(
      instance.state.data.length
    );

    // handle uncheck all
    onRowCheck(false, 'all');
    expect(instance.state.selectedData.length).toEqual(0);
    expect(rowSelectionMock).toHaveBeenCalledTimes(4);
  });
});
