import React from 'react';

import './SideBarComponent.css';

import MenuDefinition from './MenuDefinition';

const SideBarComponent = () => (
  <div className="side-bar ">
    <div className="side-bar__header">Side Bar header</div>
    <div className="side-bar__content">
      <div>
        {MenuDefinition.map(menu => (
          <div key={menu.name}>{menu.label}</div>
        ))}
      </div>
    </div>
  </div>
);

export default SideBarComponent;
