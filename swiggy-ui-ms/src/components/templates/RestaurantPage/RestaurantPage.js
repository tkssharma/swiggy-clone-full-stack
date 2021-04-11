/**
 *
 * RestaurantPage
 *
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavHeader from '../../molecules/NavHeader';
import Promotional from '../../organisms/Promotional';
import RestaurantLanding from '../../organisms/RestaurantLanding';

const RestaurantPage = ({ children }) => {
	return (
		<Fragment>
			<NavHeader />
			<Promotional />
			<RestaurantLanding />
		</Fragment>
	);
};

RestaurantPage.propTypes = {
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};

export default RestaurantPage;
