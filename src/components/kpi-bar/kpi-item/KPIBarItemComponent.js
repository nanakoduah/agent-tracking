import React from 'react';
import PropTypes from 'prop-types';

import './KPIBarItemComponent.css';

const commonStyles = {
  display: 'flex',
  height: '5px',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
  boxShadow: `0 2px 3px #7c79791f, 0 1px 2px #6b6a6a3d`
};

const getIcon = Icon => <Icon size="32" fill="#fff" />;

const KPIBarItemComponent = ({ kpi }) => (
  <div className="kpi-bar-item">
    <div
      className={`kpi-bar-item__wrapper kpi-bar-item__wrapper--${kpi.colour}`}
    >
      <div className="kpi-bar-item__header">
        <div className={`kpi-bar-item__tile kpi-bar-item__tile--${kpi.colour}`}>
          {getIcon(kpi.icon)}
        </div>
        <div className="kpi-bar-item__text">{kpi.name}</div>
      </div>
      <div className="kpi-bar-item__progress">
        <div
          style={{
            ...commonStyles,
            width: `${kpi.achieved}%`,
            backgroundColor: '#00c851'
          }}
        />
      </div>
      <div className="kpi-bar-item__body">
        <div className="kpi-bar-item__stats">
          <span className="kpi-bar-item__target">Target: </span>
          <span className="kpi-bar-item__target-value">{kpi.target}</span>
        </div>
        <div className="kpi-bar-item__stats kpi-bar-item__target2">
          <span className="kpi-bar-item__target">Done: </span>
          <span className="kpi-bar-item__target-value">{kpi.achieved}%</span>
        </div>
      </div>
    </div>
  </div>
);

KPIBarItemComponent.propTypes = {
  kpi: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.number.isRequired,
    achieved: PropTypes.number.isRequired,
    colour: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired
  })
};

export default KPIBarItemComponent;
