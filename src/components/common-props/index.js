import PropTypes from 'prop-types';

export const KPIShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  target: PropTypes.number.isRequired,
  achieved: PropTypes.number.isRequired
});

export const agentShape = PropTypes.shape({
  agentCode: PropTypes.string.isRequired,
  agentName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }).isRequired
});
