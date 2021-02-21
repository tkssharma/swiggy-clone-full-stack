import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import GraphQLClient from '../graphQL/ApolloClient';

import content from '../../content/en';

const AppComponent = ({ Component, pageProps }) => {

  useEffect(() => {
  }, []);

  return <Component {...pageProps} />;
};

AppComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

function App({ Component, pageProps }) {
  const client = GraphQLClient();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
            <AppComponent Component={Component} pageProps={pageProps} />
      </ApolloProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export function reportWebVitals(metric) {
  // TODO: send these results to some backend
  console.log(metric);
}

export default App;
