import React from 'react';
import PropTypes from 'prop-types'; // ES6

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
});

export default NotificationItemShape;
