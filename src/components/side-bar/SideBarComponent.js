import React from 'react';

import './SideBarComponent.css';

import MenuDefinition from './MenuDefinition';
import MenuItem from './menu-item';

const SideBarComponent = () => (
  <div className="side-bar ">
    <div className="side-bar__header">Side Bar header</div>
    <div className="side-bar__content">
      <div>
        {MenuDefinition.map(menu => (
          <MenuItem key={menu.name} label={menu.label} to={menu.route} />
        ))}
      </div>
    </div>
  </div>
);

export default SideBarComponent;
