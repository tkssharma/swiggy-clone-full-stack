import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { auth } from '../../../firebase/firebase';
import { useSelector } from 'react-redux';
const Div = styled.div`font-family: sans-serif;`;

const useStyles = makeStyles({
  list: {
    width: 450
  },
  fullList: {
    width: 'auto'
  }
});

export default function RegisterDrawer() {
  const isLoggedIn = useSelector(state => state.authentication.loggedIn);
  let history = useHistory();

  const classes = useStyles();
  const [phNo, setPhNo] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = React.useState({
    bottom: false
  });

  const handleSubmit = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      setState({ ...state, right: false });
      setError('');
    })
    .catch(error => {
      setError(error.message);
      console.error("Error signing in with password and email", error);
    });
  }
  const Navigate = () => {
    history.push('/restaurant')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setError('');
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
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
                <div className="col-lg-6 ml-3">
                  <h3>Sign up</h3>
                  <small>
                    or <b style={{ color: '#fc8019' }}>login to your account</b>
                  </small>
                </div>
                <div className="col-lg-4 ml-3">
                  <img
                    className="img-fluid"
                    style={{
                      width: '105px',
                      height: '100px',
                      borderRadius: '50%',
                      fload: 'right'
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
                      label="Phone Number"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setPhNo(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      label="Name"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      label="Email"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      type="password"
                      label="Password"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <small
                      style={{
                        color: '#5d8ed5',
                        marginLeft: '1%',
                        fontWeight: 'bold'
                      }}
                    >
                      Have a referral code
										</small>
                  </div>
                  <div>
                    <small
                      style={{
                        fontSize: '9px',
                        fontWeight: 'bold'
                      }}
                      className="text-muted mx-3"
                    >
                      By creating an account, I accept the{' '}
                      <small
                        style={{
                          color: '#5d8ed5',
                          fontSize: '9px',
                          fontWeight: 'bold'
                        }}
                      >
                        Terms & Conditions
											</small>
                    </small>
                  </div>
                  <div className='col-lg-12 text-center'>{error}</div>
                  <div className='col-lg-12 text-center'>
                    <button
                      style={{
                        background: '#fc8019',
                        border: '1px solid #fc8019',
                        color: 'white',
                        marginTop: '15px',
                        width: '318px',
                        borderRadius: '2%',
                      }}
                      onClick={handleSubmit}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          marginTop: '9px',
                        }}
                      >
                        SignUp
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
      { !isLoggedIn && <button
        type="button"
        className=" btn btn-lg align-self-center font-weight-bold"
        onClick={toggleDrawer('right', true)}
        style={{
          borderRadius: '0px',
          color: 'white',
          backgroundColor: 'black'
        }}
      >
        {'Sign up'}
      </button>}
      { isLoggedIn && <button
                type="button"
                className=" btn btn-lg  font-weight-bold"
                onClick={() => Navigate()}
                style={{
                  borderRadius: '0px',
                  color: 'white',
                  backgroundColor: 'black'
                }}
            >
                {'Explore'}
            </button> }
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}