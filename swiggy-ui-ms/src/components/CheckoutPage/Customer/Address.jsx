import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Location from './Location';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    font-family: system-ui !important;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    padding-top: 35px;
    // padding-right: 40px;
    padding-bottom: 39px;
    // padding-left: 40px;
    div {
        // border: 1px solid red;
    }
`;

const Logo = styled.div`
    left: -35px;
    // top: 10px;
    // position: absolute;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    // left: -30px;
    padding: 0px !important;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #282c3f;
`;

const LocationIcon = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
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

const Tick = styled.img`
    margin-left: 15px;
    height: 20px;
    width: 20px;
    vertical-align: inherit;
`;

const Change = styled.button`
    border: 1px solid #fc8019;
    font-family: system-ui !important;
    font-weight: 500;
    border-radius: 0px;
    color: #fc8019;
    &:hover {
        background-color: #fc8019;
        color: #fff !important;
    }
`;

const CurrAddr = () => {
    const history = useHistory();
    const [addr, setAddr] = useState({});
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        setAddr(JSON.parse(localStorage.getItem('CustomerCurrentLoc')));
    }, []);

    const AddrSelected = () => {
        history.push({
            pathname: '/CheckoutPage',
            isAddrSelected: flag,
        });
        setFlag(!flag);
    };

    return (
        <>
            <div className='col-6'>
                <div className='container'>
                    <AddressContainer type='button' className='row py-3'>
                        <div className='col-1'>
                            <AddLocation
                                src='Icons/location.svg'
                                alt='placeholder'
                            />
                        </div>
                        <div className='col'>
                            <div className='row row-cols-1'>
                                <AddAddressTitle className='col text-left'>
                                    Home
                                </AddAddressTitle>
                                <AddressText>
                                    <div className='col text-left text-capitalize'>
                                        {addr.flat_no}, {addr.landmark},{' '}
                                        {addr.place_name}
                                    </div>
                                    <div className='col mb-3 text-left text-capitalize'>
                                        {addr.type} Address
                                    </div>
                                </AddressText>
                                <b className='col mb-1 text-left'>30 mins</b>
                                <button
                                    type='button'
                                    className='col-8 btn btn-outline-success text-uppercase mt-2'
                                    style={{
                                        borderRadius: '0px',
                                        marginLeft: '15px',
                                    }}
                                    onClick={AddrSelected}
                                >
                                    Deliver Here
                                </button>
                            </div>
                        </div>
                    </AddressContainer>
                </div>
            </div>
            <div className='col-5 align-self-center'>
                <Location />
            </div>
        </>
    );
};

const Address = (props) => {
    const history = useHistory();
    const [addr, setAddr] = useState({});
    const { flag } = props;
    const [isAddrSelected, setIsAddrSelected] = useState(false);

    useEffect(() => {
        setIsAddrSelected(flag || false);
        setAddr(JSON.parse(localStorage.getItem('CustomerCurrentLoc')));
    }, [flag]);

    const AddrSelected = () => {
        history.push({
            pathname: '/CheckoutPage',
            isAddrSelected: !flag,
        });
        // setFlag(!flag);
    };

    if (isAddrSelected) {
        return (
            <>
                <Wrapper className='container'>
                    <div className='row'>
                        <Logo className='col-1'>
                            <LocationIcon
                                src='Icons/placeholder.svg'
                                alt='placeholder'
                            />
                        </Logo>
                        <div className='col-11'>
                            <div className='row '>
                                <div className='col'>
                                    <Title>
                                        Delivery Address
                                        <Tick
                                            src='Icons/checkmark.svg'
                                            alt='Check'
                                        />
                                    </Title>
                                </div>{' '}
                                <div class='w-100'></div>
                                <div className='col-6'>
                                    <div className='container'>
                                        <AddressContainer
                                            type='button'
                                            className='row py-3'
                                        >
                                            <div className='col-1'>
                                                <AddLocation
                                                    src='Icons/location.svg'
                                                    alt='placeholder'
                                                />
                                            </div>
                                            <div className='col'>
                                                <div className='row row-cols-1'>
                                                    <AddAddressTitle className='col text-left'>
                                                        Home
                                                    </AddAddressTitle>
                                                    <AddressText>
                                                        <div className='col text-left text-capitalize'>
                                                            {addr.flat_no},{' '}
                                                            {addr.landmark},{' '}
                                                            {addr.place_name}
                                                        </div>
                                                        <div className='col mb-3 text-left text-capitalize'>
                                                            {addr.type} Address
                                                        </div>
                                                    </AddressText>
                                                    <b className='col mb-1 text-left'>
                                                        30 mins
                                                    </b>
                                                </div>
                                            </div>
                                        </AddressContainer>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <Change
                                        type='button'
                                        className='btn'
                                        onClick={AddrSelected}
                                    >
                                        CHANGE
                                    </Change>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    } else {
        return (
            <>
                <>
                    <Wrapper className='container'>
                        <div className='row'>
                            <Logo className='col-1'>
                                <LocationIcon
                                    src='Icons/placeholder.svg'
                                    alt='placeholder'
                                />
                            </Logo>
                            <div className='col-11'>
                                <div className='row '>
                                    <div className='col'>
                                        <Title>Delivery Address</Title>
                                    </div>{' '}
                                    <div class='w-100'></div>
                                    {localStorage.getItem(
                                        'CustomerCurrentLoc',
                                    ) == null ? (
                                        <div className='col-5 '>
                                            <Location />
                                        </div>
                                    ) : (
                                        <>
                                            <CurrAddr />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </>
            </>
        );
    }
};

export default Address;
