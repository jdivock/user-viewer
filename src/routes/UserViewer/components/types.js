import PropTypes from 'prop-types';

export const userType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  phone: PropTypes.string,
}));
