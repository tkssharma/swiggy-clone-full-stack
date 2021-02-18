/**
 *
 * Layout
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header';

import useStyles from './Layout.style';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
