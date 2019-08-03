import React from 'react';
import PropTypes from 'prop-types';

const UserIcon = ({ size = '16', fill = '#eee' }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    with={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 261.472 261.472"
    xmlSpace="preserve"
  >
    <path
      fill={fill}
      d="M187.497,152.427H73.974c-38.111,0-69.117,31.006-69.117,69.117v39.928h251.758v-39.928
			C256.614,183.433,225.608,152.427,187.497,152.427z M241.614,246.473H19.856v-24.928c0-29.84,24.277-54.117,54.117-54.117h113.523
			c29.84,0,54.117,24.277,54.117,54.117L241.614,246.473L241.614,246.473z"
    />
    <path
      fill={fill}
      d="M130.735,145.326c40.066,0,72.663-32.597,72.663-72.663S170.802,0,130.735,0S58.072,32.596,58.072,72.663
			S90.669,145.326,130.735,145.326z M130.735,15c31.796,0,57.663,25.867,57.663,57.663s-25.867,57.663-57.663,57.663
			s-57.663-25.868-57.663-57.663S98.939,15,130.735,15z"
    />
  </svg>
);

UserIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
};

export default UserIcon;