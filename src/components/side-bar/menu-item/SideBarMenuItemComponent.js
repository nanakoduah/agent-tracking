import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SideBarMenuItemComponent.css';

const ACTIVE_STYLE = {
  backgroundColor: 'cornflowerblue',
  color: 'tomato'
};
const SideBarMenuItemComponent = ({ to, label, Icon }) => (
  <li className="side-bar-menu">
    <NavLink activeStyle={ACTIVE_STYLE} className="side-bar-menu__link" to={to}>
      <div className="side-bar-menu__link-content">
        <Icon />
        <span className="side-bar-menu__label">{label}</span>
      </div>
    </NavLink>
  </li>
);

SideBarMenuItemComponent.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired
};

export default SideBarMenuItemComponent;
