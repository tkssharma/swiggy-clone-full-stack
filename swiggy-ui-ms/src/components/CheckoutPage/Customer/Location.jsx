import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Map from './Map';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    font-family: system-ui !important;
    overflow: hidden;
    padding: 10px 0;
    margin: 0;
    box-sizzing: border-box;
    font-family: sans-serif;
    box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    width: inherit;
    background: #fff;
    z-index: 1000;
    div {
        // border: 1px solid red;
    }
`;

const Middle = styled.div`
    margin-top: 80px;
    width: 80%;
    div {
        // border: 1px solid red;
        // padding: 10px;
    }
`;

const MapContainer = styled.div`
    font: 400 11px Roboto, Arial, sans-serif !important;
    // cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'), default;
    // z-index: 3;
    box-sizing: inherit;
    // position: absolute;
    height: 300px;
    width: 100%;
    padding: 0px;
    border-width: 0px;
    margin: 0px;
    // left: 0px;
    // top: 0px;
    // touch-action: pan-x pan-y;
`;

const Button2 = styled.button`
    border-radius: 0px;
    &:hover {
        color: #fff;
        background-color: black;
    }
`;

const Wrapper2 = styled.div`
    font-family: system-ui !important;
    overflow: hidden;
    padding: 10px 0;
    margin: 0;
    box-sizzing: border-box;
    font-family: sans-serif;
    box-shadow: 0 -2px 4px 0 #e9e9eb;
    position: fixed;
    // top: 40%vh;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    width: inherit;
    background: #fff;
    z-index: 1000;
`;

const Button = styled.button`
    box-shadow: 0 2px 8px #d4d5d9;
    background-color: #fc8019;
    border-radius: 0px;
    border: none;
    line-height: 50px;
    font-size: 14px;
    font-weight: 600;
    height: 50px;
    padding: 0 2rem;
    letter-spacing: 0;
    color: #fff;
    &:hover {
        color: #fff;
    }
`;

const Heading = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    color: #282c3f;
`;

const AddAddressTitle = styled.p`
    margin-bottom: 4px;
    font-size: 17px;
    font-weight: 600 !important;
    color: #282c3f;
    line-height: 1.18;
`;

const AddressText = styled.p`
    font-size: 13px;
    color: #93959f;
    margin-bottom: 8px;
    font-weight: 300;
    line-height: 16px;
    overflow: hidden;
`;

const AddressContainer = styled.button`
    border: 1px dashed #e9e9eb;
    padding: 0px;
    background: white;
    &:hover {
        box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    }
`;

const AddLocation = styled.img`
    height: 25px;
    width: 25px;
    vertical-align: inherit;
    margin-radius: 0px;
    // box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const useStyles = makeStyles({
    list: {
        width: 450,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const history = useHistory();
    const [flatNo, setFlatNo] = useState('');
    const [landmark, setLandmark] = useState('');
    const [type, setType] = useState('');
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const getUserLocation = () => {
        console.log(getUserLocation);
        const data = JSON.parse(localStorage.getItem('CustomerCurrentLoc'));

        const userLoc = {
            flat_no: flatNo,
            landmark: landmark,
            place_name: data.place_name,
            long: data.long,
            lat: data.lat,
            type: type,
        };

        localStorage.setItem('CustomerCurrentLoc', JSON.stringify(userLoc));

        setState({ ...state, left: false });
        history.push('/CheckoutPage');
    };

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
            role='presentation'
        >
            <Wrapper className='container-fluid'>
                <div className='container' style={{ width: '65%' }}>
                    <div className='row justify-content-between'>
                        <button
                            type='button'
                            className='btn btn-sm col col-md-auto'
                            onClick={toggleDrawer(anchor, false)}
                        >
                            <i className='fas fa-times fa-lg'></i>
                        </button>
                        <Heading className='col col-md-auto text-center'>
                            Save delivery address
                        </Heading>
                    </div>
                </div>
            </Wrapper>
            <Middle className='container'>
                <div className='row row-cols-1'>
                    <div className='col'>
                        <MapContainer>
                            <Map />
                        </MapContainer>
                    </div>
                    <div
                        className='col mt-5 pt-5'
                        style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                    >
                        <TextField
                            label='Door/Flat No.'
                            placeholder=''
                            fullWidth
                            variant='outlined'
                            style={{
                                marginLeft: '0px',
                                borderRadius: '0px',
                            }}
                            onChange={(e) => {
                                setFlatNo(e.target.value);
                            }}
                        />
                    </div>
                    <div
                        className='col pt-2'
                        style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                    >
                        <TextField
                            label='Landmark'
                            placeholder=''
                            fullWidth
                            variant='outlined'
                            style={{
                                marginLeft: '0px',
                                borderRadius: '0px',
                            }}
                            onChange={(e) => {
                                setLandmark(e.target.value);
                            }}
                        />
                    </div>
                    <div className='col'>
                        <div className='container'>
                            <div className='row'>
                                <Button2
                                    type='button'
                                    className='col btn'
                                    onClick={() => setType('Home')}
                                >
                                    Home
                                </Button2>
                                <Button2
                                    type='button'
                                    className='col btn'
                                    onClick={() => setType('Work')}
                                >
                                    Work
                                </Button2>
                                <Button2
                                    type='button'
                                    className='col btn'
                                    onClick={() => setType('Other')}
                                >
                                    Other
                                </Button2>
                            </div>
                        </div>
                    </div>
                </div>
            </Middle>
            <Wrapper2 className='container-fluid '>
                <div className='container' style={{ width: '75%' }}>
                    <Button
                        type='button'
                        className='btn col btn-block'
                        onClick={getUserLocation}
                    >
                        SAVE ADDRESS & PROCEED
                    </Button>
                </div>
            </Wrapper2>
        </div>
    );

    return (
        <div>
            <AddressContainer
                type='button'
                className='btn btn-md text-capitalize row py-3'
                onClick={toggleDrawer('left', true)}
            >
                <div className='col-1'>
                    <AddLocation src='Icons/location.svg' alt='placeholder' />
                </div>
                <div className='col '>
                    <div className=' row row-cols-1'>
                        <AddAddressTitle className='col text-left text-capitalize'>
                            Add New Address
                        </AddAddressTitle>
                        <AddressText>
                            <div className='col text-left text-capitalize'>
                                Kormangala, Bengaluru, Karnataka, India
                            </div>
                        </AddressText>
                        <button
                            type='button'
                            className='col-5 btn btn-outline-success text-uppercase mt-2'
                            style={{
                                borderRadius: '0px',
                                marginLeft: '15px',
                            }}
                        >
                            Add New
                        </button>
                    </div>
                </div>
            </AddressContainer>
            <Drawer
                anchor={'left'}
                open={state['left']}
                // onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </div>
    );
}
