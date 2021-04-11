/**
 *
 * RestaurantLanding
 *
 */
import React from 'react';
import PropTypes from 'prop-types';


const RestaurantLanding = ({ children }) => {

  return (<div>{children}</div>);
};

RestaurantLanding.propTypes = {
  children: PropTypes.oneOfType([
              PropTypes.arrayOf(PropTypes.node),
              PropTypes.node
            ]).isRequired
}

export default RestaurantLanding;
