/**
 *
 * Landing
 *
 */
import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import HeroComponent from '../../organisms/HeroHeader';
import Feature from '../../organisms/Feature';
import Ads from '../../organisms/Advertisement';
import Footer from '../../organisms/Footer';

const Landing = (props) => {

  return (
  <Fragment>
     <HeroComponent />
     <Ads />
     <Footer />
    </Fragment>
    );
};

export default Landing;
