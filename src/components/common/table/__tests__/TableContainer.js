import React from 'react';
import renderer from 'react-test-renderer';

import TableContainer from '../TableContainer';

describe('TableContainer', () => {
  it('should initialize properly', () => {
    const tree = renderer.create(
      <TableContainer component={jest.fn(() => null)} />
    );
    expect(tree.getInstance().state).toMatchSnapshot();
  });
});
