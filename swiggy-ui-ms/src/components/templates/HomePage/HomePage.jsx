/**
 *
 * HomePage
 *
 */
import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import Layout from '../Layout';
import Home from '../../organisms/Home';
import Link from '../../atoms/Link';

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Grid item xs={12}>
          <Box my={2}>
            <Link href="/dashboard">Dashboard</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Home />
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;
