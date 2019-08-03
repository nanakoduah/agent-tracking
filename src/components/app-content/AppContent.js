import React from 'react';
import PropTypes from 'prop-types';

import './AppContent.css';

const AppContent = ({ children }) => (
  <div className="app-content">{children}</div>
);

AppContent.propTypes = {
  children: PropTypes.node
};

export default AppContent;
