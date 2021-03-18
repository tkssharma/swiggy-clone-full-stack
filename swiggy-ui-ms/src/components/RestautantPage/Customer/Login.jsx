import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import SignUp from './SignUp';

const Div = styled.div`
    font-family: sans-serif;
`;

const useStyles = makeStyles({
    list: {
        width: 450,
    },
    fullList: {
        width: 'auto',
    },
});

export default function LoginDrawer() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const classes = useStyles();
    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
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
            role='presentation'
        >
            <Div className='container mt-3' style={{ width: '90%' }}>
                <Div className='row'>
                    <Div className='col text-left'>
                        <button
                            type='button'
                            className='btn btn-sm'
                            onClick={toggleDrawer(anchor, false)}
                        >
                            <i className='fas fa-times fa-lg'></i>
                        </button>
                        <div className='container mt-2'>
                            <div className='row'>
                                <div className='ml-3 col'>
                                    <h3>Login</h3>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <small>or </small>
                                        </div>
                                        <div className='col align-self-start text-left'>
                                            <SignUp />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5 ml-0'>
                                    <img
                                        className='img-fluid'
                                        style={{
                                            width: '105px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            fload: 'right',
                                        }}
                                        src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                                        alt='logo of wrap'
                                    />
                                </div>
                            </div>
                            <div className='container-fluid mt-3'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <TextField
                                            id='outlined-textarea'
                                            label='Phone Number'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12 text-center'>
                                        <OtpDrawer
                                            phoneNumber={phoneNumber}
                                            setState={setState}
                                            state={state}
                                        />
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
            <button
                type='button'
                className='nav-link btn btn-lg align-self-center '
                onClick={toggleDrawer('right', true)}
            >
                <i className='fa fa-user'></i> {'Sign in'}
            </button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}

function OtpDrawer({ phoneNumber, setState, state }) {
    const history = useHistory();
    const [otp, setOtp] = useState('');
    const classes = useStyles();
    const [state2, setState2] = React.useState({
        bottom: false,
    });

    const toggleOTPDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState2({ ...state2, [anchor]: open });
    };

    const handleVerify = () => {
        // console.log(phoneNumber, otp);
        // console.log(setState, state);
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/api/customer/login/verify`,
                {
                    phoneNumber: phoneNumber,
                    otp: otp,
                },
            )
            .then((res) => {
                // console.log(res.data);
                // alert('Login Successfull');
                setState2({ ...state2, right: false });
                setState({ ...state, right: false });
                localStorage.setItem('customerData', JSON.stringify(res.data));
                history.push('/temp');
                // history.push('/');
                history.push('/Restaurants');
                // history.goBack();
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data);
            });
    };

    const getOtp = () => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/api/customer/login`, {
                phoneNumber: phoneNumber,
            })
            .then((res) => {
                // console.log(res);
                // alert('OTP have been sent Customer Phone Number');
                setState2({ ...state2, right: true });
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data);
            });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            style={{ right: 0 }}
            role='presentation'
        >
            <Div className='container mt-3' style={{ width: '90%' }}>
                <Div className='row'>
                    <Div className='col text-left'>
                        <button
                            type='button'
                            className='btn btn-sm'
                            onClick={toggleOTPDrawer(anchor, false)}
                        >
                            <i className='fas fa-arrow-left fa-lg'></i>
                        </button>
                        <div className='container mt-2'>
                            <div className='row'>
                                <div className='col-lg-6 ml-3'>
                                    <h3>Enter OTP</h3>
                                    <small>
                                        We've sent an OTP to your phone number.
                                    </small>
                                </div>
                                <div className='col-lg-4 ml-4'>
                                    <img
                                        className='img-fluid'
                                        style={{
                                            width: '105px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            fload: 'right',
                                        }}
                                        src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                                        alt='logo of wrap'
                                    />
                                </div>
                            </div>
                            <div className='container-fluid mt-5'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <TextField
                                            label='Phone Number'
                                            value={phoneNumber}
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <TextField
                                            label='One time password'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setOtp(e.target.value);
                                            }}
                                        />
                                    </div>
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
                                            onClick={handleVerify}
                                        >
                                            <p
                                                style={{
                                                    fontWeight: 'bold',
                                                    marginTop: '9px',
                                                }}
                                            >
                                                VERIFY OTP
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
            <button
                type='button'
                style={{
                    background: '#fc8019',
                    border: '1px solid #fc8019',
                    color: 'white',
                    marginTop: '15px',
                    width: '318px',
                    borderRadius: '2%',
                }}
                onClick={getOtp}
            >
                <p
                    style={{
                        fontWeight: 'bold',
                        marginTop: '9px',
                    }}
                >
                    {'LOGIN'}
                </p>
            </button>
            <Drawer
                anchor={'right'}
                open={state2['right']}
                onClose={toggleOTPDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}
