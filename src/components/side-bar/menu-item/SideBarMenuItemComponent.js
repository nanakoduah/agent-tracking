import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SideBarMenuItemComponent.css';

const ACTIVE_STYLE = {
  fontWeight: 'bold',
  backgroundColor: 'cornflowerblue',
  color: 'tomato'
};
const SideBarMenuItemComponent = ({ to, label }) => (
  <li className="side-bar-menu">
    <NavLink activeStyle={ACTIVE_STYLE} className="side-bar-menu__link" to={to}>
      <div className="side-bar-menu__link-content">
        <span className="side-bar-menu__label">{label}</span>
      </div>
    </NavLink>
  </li>
);

SideBarMenuItemComponent.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SideBarMenuItemComponent;
