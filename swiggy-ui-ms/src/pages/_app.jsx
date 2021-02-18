import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import { LabelProvider, useLabels } from '../stores/labels';
import GraphQLClient from '../graphQL/ApolloClient';

import { theme } from '../theme';
import content from '../../content/en';

const AppComponent = ({ Component, pageProps }) => {
  const { setLabels } = useLabels();

  useEffect(() => {
    setLabels({ global: content });
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LabelProvider>
            <AppComponent Component={Component} pageProps={pageProps} />
          </LabelProvider>
        </ThemeProvider>
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
