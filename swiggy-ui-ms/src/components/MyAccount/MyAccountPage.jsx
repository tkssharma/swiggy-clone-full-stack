import React, { useState, useEffect } from 'react';
import MyAccNavigator from '../../components/molecules/NavHeader';
import Container from './Container';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    background: #35728a;
    min-height: calc(100vh - 368px);
    // overflow-x: hidden;
    // overflow-y: auto;
    position: relative;
    z-index: 2;
    padding-bottom: 60px;
    div {
        // border: 1px solid red;
    }

    h4 {
        text-transform: capitalize;
    }
`;

const Title = styled.div`
    // border: 1px solid red;
    height: 130px;
    background: inherit;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin: auto;
    margin-top: 110px;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: left;
    // text-transform: capitalize;
    cursor: pointer;
    contain: strict;
`;

const Edit = styled.button`
    border: 1px solid hsla(0, 0%, 100%, 0.6);
    text-transform: uppercase;
    // display: inline-block;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    // background: '#35728a';
    border-radius: 0;
    padding: '12px !important';
    margin-bottom: '20px';
`;

const MyAccountPage = () => {
    const [data, setData] = useState({});
    return (
        <>
            <MyAccNavigator />
            <Wrapper>
                <div className='container-fluid' style={{ width: '90%' }}>
                    <div className='row row-cols-1'>
                        <Title className='col row-cols-1'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='col text-left text-capitalize'>
                                        {data.name}
                                    </div>
                                    <div class='w-100'></div>
                                    <p
                                        className='col text-left'
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {data.phoneNumber}{' '}
                                        <span
                                            className='align-items-end mb-2 mr-3 ml-3'
                                            style={{
                                                fontSize: '20px',
                                            }}
                                        >
                                            |
                                        </span>{' '}
                                        {data.email}
                                    </p>
                                </div>
                                <div className='col-md-auto align-self-center'>
                                    <Edit type='button' className='btn btn-lg '>
                                        Edit profile
                                    </Edit>
                                </div>
                            </div>
                        </Title>
                        <div
                            className='col'
                            style={{
                                backgroundColor: 'white',
                            }}
                        >
                            {' '}
                            <Container />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default MyAccountPage;
