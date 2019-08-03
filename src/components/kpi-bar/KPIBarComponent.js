import React from 'react';
import PropTypes from 'prop-types';

import './KPIBarComponent.css';

import KPIBarItem from './kpi-item';

import PaymentIcon from '../../icons/PaymentIcon';
import RevenueIcon from '../../icons/RevenueIcon';
import SavingsIcon from '../../icons/SavingsIcon';
import CustomerIcon from '../../icons/CustomerIcon';

const KPI_COLOR_MAP = {
  payment: { colour: 'red', icon: PaymentIcon },
  customers: { colour: 'blue', icon: CustomerIcon },
  revenue: { colour: 'yellow', icon: RevenueIcon },
  saving: { colour: 'green', icon: SavingsIcon }
};

const KPIBarComponent = ({ kpis = [] }) => {
  const getKPI = kpi => ({
    ...kpi,
    colour: KPI_COLOR_MAP[kpi.name].colour,
    icon: KPI_COLOR_MAP[kpi.name].icon
  });

  return (
    <div className="kpi-bar">
      {kpis.length > 0 &&
        kpis.map(kpi => <KPIBarItem kpi={getKPI(kpi)} key={kpi.name} />)}
    </div>
  );
};

KPIBarComponent.propTypes = {
  kpis: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      target: PropTypes.number.isRequired,
      achieved: PropTypes.number.isRequired
    })
  )
};
export default KPIBarComponent;
