import React from 'react';
import styled from 'styled-components';
import SortRestaurants from './SortRestaurants';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    background: #ec6f5b;
    min-height: calc(100vh - 368px);
    // overflow-x: hidden;
    // overflow-y: auto;
    position: relative;
    z-index: 2;
    padding-bottom: 60px;
`;

const Title = styled.div`
    height: 190px;
    background: inherit;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    contain: strict;
`;

const AllRestaurants = () => {
    return (
        <Wrapper>
            <div className='container-fluid' style={{ width: '90%' }}>
                <div className='row row-cols-1'>
                    <Title className='col '>
                        <img
                            src='Icons/downArrow.svg'
                            alt='downArrow'
                            style={{
                                marginRight: '15px',
                                height: '32px',
                            }}
                        />
                        All Restaurants
                    </Title>
                    <div
                        className='col'
                        style={{
                            backgroundColor: 'white',
                        }}
                    >
                        {' '}
                        <SortRestaurants filter={'all'} />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AllRestaurants;
