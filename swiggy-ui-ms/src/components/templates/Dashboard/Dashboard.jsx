/**
 *
 * Dashboard
 *
 */
import React from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import Layout from '../Layout';
import Link from '../../atoms/Link';

import GridComponent from '../../organisms/Grid';

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Grid item xs={12}>
          <Box my={2}>
            <Link href="/">Home</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <GridComponent></GridComponent>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Dashboard;
