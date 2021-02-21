/**
 *
 * Layout
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header';


const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
