import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BillItems from '../CheckoutPage/Customer/BillItems';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    color: #171a29;
    font-family: sans-serif;
    border: 1px solid #d4d5d9;
    div {
        // border: 1px solid red;
    }
`;

const Image = styled.img`
    width: inherit;
    // height: 150px;
    // padding-left: 0px;
    // padding-right: 0px;
`;

const Tick = styled.img`
    margin-left: 15px;
    height: 20px;
    width: 20px;
    vertical-align: text-bottom;
`;

const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #171a29;
    // display: inline-block;
    // line-height: 2rem;
    margin-bottom: 0px;
    cursor: pointer;
    &:hover {
        color: #fc8019;
    }
`;

const Info = styled.p`
    font-size: 15px;
    font-weight: 400;
    // color: #171a29;
    // display: inline-block;
    // line-height: 2.5rem;
    margin-bottom: 0px;
    cursor: pointer;
`;

const Dets = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #fc8019;
    // display: inline-block;
    // line-height: 2.5rem;
    margin-bottom: 0px;
    cursor: pointer;
    &:hover {
        color: #171a29;
    }
`;

const Reorder = styled.button`
    font-size: 16px;
    font-weight: 600;
    border-radius: 0px;
    color: #fff;
    background: #fc8019;
    &:hover {
        box-shadow: 0 2px 8px #d4d5d9;
        color: #fff;
    }
`;

const Help = styled.button`
    font-size: 16px;
    font-weight: 600;
    border-radius: 0px;
    border: 1px solid #fc8019;
    color: #fc8019;
    // background: #fc8019;
    &:hover {
        box-shadow: 0 2px 8px #d4d5d9;
        color: #fc8019;
    }
`;

const OrderCard = (props) => {
    const { data } = props;
    console.log('orders', data);
    return (
        <Wrapper className='container text-left mb-5'>
            <div className='row p-4'>
                <div className='col-3 pl-0'>
                    <Image src={data.image_url} alt='Hotel' />
                </div>
                <div className='col row-cols-1 pl-0'>
                    <div className='col'>
                        <div className='row justify-content-between'>
                            <div className='col-md-auto'>
                                <Name>{data.restaurant_name}</Name>
                            </div>
                            <div className='col-md-auto text-right mt-1 text-muted'>
                                Delivered
                                <Tick src='Icons/checkmark.svg' alt='Check' />
                            </div>
                        </div>
                    </div>
                    <div className='col text-capitalize text-muted'>
                        <Info>
                            ORDER #{data._id} | {data.date}
                        </Info>
                    </div>
                    <div className='col text-uppercase mt-3'>
                        <Dets>view details</Dets>
                    </div>
                </div>
            </div>
            <div className='row-cols-1'>
                <div
                    className='col mt-3 mb-3'
                    style={{ border: '1px dashed #d4d5d9' }}
                ></div>
                <div className='col' style={{ fontWeight: 300 }}>
                    {data.items.map((item) => (
                        <BillItems data={item} />
                    ))}
                </div>

                <div className='col'>
                    <div className='row justify-content-end'>
                        <div
                            className='col-md-auto text-right text-muted'
                            style={{ borderTop: '2px solid #d4d5d9' }}
                        >
                            Total Paid: ₹{' '}
                            {data.items.reduce(
                                (a, b) => a + b.quantity * b.price,
                                50,
                            )}
                        </div>
                    </div>
                </div>
                <div className='col mb-4'>
                    <div className='row ml-1'>
                        <Reorder
                            type='button'
                            className='btn col-2 p-2 mr-4 text-uppercase'
                        >
                            reorder
                        </Reorder>
                        <Help
                            type='button'
                            className='btn col-2 p-2 mr-4 text-uppercase'
                        >
                            help
                        </Help>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default OrderCard;
