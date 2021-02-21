
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    overflow: hidden;
    ul {
        list-style: none;
    }
    ul > li {
        margin-bottom: 15px;
        text-align: left;
        color: white;
    }
`;

function MainFooter() {
    return (
        <Header>
            <div
                className='container-fluid'
                style={{
                    background: 'black',
                    textAlign: 'left',
                    fontFamily: 'sans-serif',
                }}
            >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        color: 'white',
                                    }}
                                >
                                    <li style={{ marginTop: '35%' }}>
                                        <b className='text-muted'>COMPANY</b>
                                    </li>
                                    <li>About Us</li>
                                    <li>Team</li>
                                    <li>Careers</li>
                                    <li>Swiggy Blog</li>
                                    <li>Bug Bounty</li>
                                    <li>Swiggy Pop</li>
                                    <li>Swiggy Super</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: '10px',
                                        color: 'white',
                                    }}
                                >
                                    <li style={{ marginTop: '28%' }}>
                                        <b className='text-muted'>CONTACT</b>
                                    </li>
                                    <li>Help & Support</li>
                                    <li>Partner with Us</li>
                                    <li>Ride with us</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: '10px',
                                        color: 'white',
                                    }}
                                >
                                    <li style={{ marginTop: '28%' }}>
                                        <b className='text-muted'>LEGAL</b>
                                    </li>
                                    <li>Terms & Conditions</li>
                                    <li>Refund & Cancellation</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    <li>Offer Terms</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='mt-5'>
                                <ul style={{ listStyle: 'none' }}>
                                    <li style={{ marginTop: '30%' }}>
                                        <img
                                            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'
                                            alt='apple'
                                            className='img-fluid'
                                            style={{
                                                border: '2px solid white',
                                                borderRadius: '10px',
                                            }}
                                        />
                                    </li>
                                    <li style={{ marginTop: '30px' }}></li>
                                    <li>
                                        <img
                                            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'
                                            alt='googleplay'
                                            className='img-fluid'
                                            style={{
                                                border: '2px solid white',
                                                borderRadius: '10px',
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            style={{
                                borderBottom: '1px solid grey',
                                width: '100%',
                                marginLeft: '3%',
                                marginTop: '3%',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </Header>
    );
}
export default MainFooter;
