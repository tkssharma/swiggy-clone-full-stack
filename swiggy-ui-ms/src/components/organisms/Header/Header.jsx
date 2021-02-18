/**
 *
 * Header
 *
 */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './Header.style';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" className={classes.title}>
            Hiring & Staffing
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
