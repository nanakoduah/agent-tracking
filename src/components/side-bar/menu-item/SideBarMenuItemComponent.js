import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SideBarMenuItemComponent.css';

const SideBarMenuItemComponent = ({ to, label }) => (
  <li className="side-bar-menu">
    <NavLink className="side-bar-menu__link" to={to}>
      <span className="side-bar-menu__label">{label}</span>
    </NavLink>
  </li>
);

SideBarMenuItemComponent.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SideBarMenuItemComponent;
