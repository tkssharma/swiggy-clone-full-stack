import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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

export default function RegisterDrawer() {
    const classes = useStyles();
    const [phNo, setPhNo] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = React.useState({
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
                                <div className='col-lg-6 ml-3'>
                                    <h3>Sign up</h3>
                                    <small>
                                        or{' '}
                                        <b style={{ color: '#fc8019' }}>
                                            login to your account
                                        </b>
                                    </small>
                                </div>
                                <div className='col-lg-4 ml-3'>
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
                                            label='Phone Number'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setPhNo(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <TextField
                                            label='Name'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <TextField
                                            label='Email'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <TextField
                                            label='Password'
                                            placeholder=''
                                            fullWidth
                                            variant='outlined'
                                            style={{
                                                marginLeft: '0px',
                                                borderRadius: '0px',
                                            }}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className='col-lg-12 mt-3'>
                                        <small
                                            style={{
                                                color: '#5d8ed5',
                                                marginLeft: '1%',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Have a referral code
                                        </small>
                                    </div>

                                    <div className='col-lg-12 text-center'>
                                        <OtpDrawer
                                            phoneNumber={phNo}
                                            name={name}
                                            email={email}
                                            password={password}
                                            setState={setState}
                                            state={state}
                                        />
                                    </div>
                                    <div>
                                        <small
                                            style={{
                                                fontSize: '9px',
                                                fontWeight: 'bold',
                                            }}
                                            className='text-muted mx-3'
                                        >
                                            By creating an account, I accept the{' '}
                                            <small
                                                style={{
                                                    color: '#5d8ed5',
                                                    fontSize: '9px',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Terms & Conditions
                                            </small>
                                        </small>
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
                className=' btn btn-sm '
                onClick={toggleDrawer('right', true)}
                style={{
                    color: '#fc8019',
                    lineHeight: '0px',
                }}
            >
                {'create an account'}
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

function OtpDrawer({ phoneNumber, name, email, password, setState, state }) {
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
        console.log(phoneNumber, name, email, password, otp);
        console.log(setState, state);
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/api/customer/register/verify`,
                {
                    otp: otp,
                    name: name,
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
                },
            )
            .then((res) => {
                // console.log(res.data);
                // alert('Registeration Successfull');
                setState2({ ...state2, right: false });
                setState({ ...state, right: false });
                localStorage.setItem('customerData', JSON.stringify(res.data));
                history.push('/Restaurants');
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data);
            });
    };

    const getOtp = () => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/api/customer/register`, {
                phoneNumber: phoneNumber,
                name: name,
                email: email,
                password: password,
            })
            .then((res) => {
                // console.log(res);
                // alert(
                //     `${name} Registered successfull \n OTP has been sent to ${phoneNumber}`,
                // );
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
                    {'CONTINUE'}
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
