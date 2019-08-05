import React from 'react';
import renderer from 'react-test-renderer';

import DashboardContainer from '../DashboardContainer';
import { kpiData, agentsData } from '../../../__mocks__/data';

describe('Dashboard Container', () => {
  it('Should render properly', () => {
    const tree = renderer.create(
      <DashboardContainer
        component={jest.fn(() => null)}
        kpis={kpiData}
        agents={agentsData}
      />
    );
    expect(tree.getInstance().state).toMatchSnapshot();
  });

  it.only('Should handle agent selection properly', () => {
    const component = jest.fn(() => null);
    const tree = renderer.create(
      <DashboardContainer
        component={component}
        kpis={kpiData}
        agents={agentsData}
      />
    );

    const instance = tree.getInstance();

    const { onAgentSelectionChange } = component.mock.calls[0][0];
    onAgentSelectionChange(agentsData);

    expect(instance.state.selectedAgents).toEqual(agentsData);
  });
});
