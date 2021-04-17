import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    div {
        // border: 1px solid red;
    }
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: #3e4152;
`;

const BillItems = (props) => {
    const { data } = props;
    return (
        <Wrapper>
            <div className='row justify-content-between mb-2'>
                <div className='row col-md-auto align-self-center pr-0'>
                    <div className='col-1'>
                        {data.veg ? (
                            <img
                                src='/Icons/veg.png'
                                alt='veg'
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    marginRight: '4px',
                                    marginBottom: '3px',
                                }}
                            />
                        ) : (
                            <img
                                src='/Icons/nonveg.png'
                                alt='non-veg'
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    marginRight: '4px',
                                    marginBottom: '3px',
                                }}
                            />
                        )}
                    </div>
                    <Title
                        className='col text-left pr-0'
                        style={{ maxWidth: '220px', paddingLeft: '7px' }}
                    >
                        {data.name}
                        <small
                            style={{
                                fontSize: '13px',
                                marginLeft: '3px',
                                marginRight: '0px',
                                marginBottom: '2px !important',
                            }}
                        >
                            {data.qty ? (
                                <>(x{data.qty})</>
                            ) : (
                                <>(x{data.quantity})</>
                            )}
                        </small>
                    </Title>
                </div>

                <div className='col  col-md-auto '>
                    <p className='  text-muted m-0'>
                        {' '}
                        ₹{' '}
                        {data.qty ? (
                            <>{data.qty * data.price}</>
                        ) : (
                            <>{data.quantity * data.price}</>
                        )}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default BillItems;
