import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import env from 'react-dotenv';
import { useSelector, useDispatch } from 'react-redux';
const Div = styled.div`
  font-family: sans-serif;
`;
const City = styled.button`
  background: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0px;
  border: 0px;
  border-bottom: 2px solid black;
  &:hover {
    cursor: pointer;
    color: #fc8019;
    border-bottom: 2px solid #fc8019;
  }
`;

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AuthLoginDrawer() {
  const [area, setArea] = useState('');
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  useEffect(() => {
    if (localStorage.getItem('Coordinates') == null) {
      setArea('Bangaluru');
    } else {
      setArea(JSON.parse(localStorage.getItem('Coordinates')).area);
    }
  }, []);
  // console.log(area);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      style={{ right: 0 }}
      role="presentation"
    >
      <Div className="container mt-3" style={{ width: '90%' }}>
        <Div className="row">
          <Div className="col text-left">
            <button type="button" className="btn btn-sm" onClick={toggleDrawer(anchor, false)}>
              <i className="fas fa-times fa-lg" />
            </button>
            <div className="container mt-2">
              <div className="row">
                <div className="col-lg-5 ml-3">
                  <h3>Save Location</h3>
                </div>
                <div className="col-lg-5 ml-4">
                  <img
                    className="img-fluid"
                    style={{
                      width: '105px',
                      height: '100px',
                      borderRadius: '50%',
                      fload: 'right',
                    }}
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="logo of wrap"
                  />
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <TextField
                      label="Enter Location"
                      placeholder="search"
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                      }}
                    />
                  </div>
                  <div className="col-lg-12 text-center"></div>
                  <div className="col-lg-12 text-center">
                    <button
                      style={{
                        background: '#fc8019',
                        border: '1px solid #fc8019',
                        color: 'white',
                        marginTop: '15px',
                        width: '318px',
                        borderRadius: '2%',
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          marginTop: '9px',
                        }}
                      >
                        Location Search
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </div>
  );

  return (
    <div>
      <City
        type="button"
        className="btn btn-md text-capitalize"
        onClick={toggleDrawer('right', true)}
      >
        {area}
      </City>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}
