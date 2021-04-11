/**
 *
 * RestaurantCard
 *
 */
import React from 'react';
import PropTypes from 'prop-types';


const RestaurantCard = ({ children }) => {

  return (<div className={classes.root}>{children}</div>);
};

RestaurantCard.propTypes = {
  children: PropTypes.oneOfType([
              PropTypes.arrayOf(PropTypes.node),
              PropTypes.node
            ]).isRequired
}

export default RestaurantCard;
