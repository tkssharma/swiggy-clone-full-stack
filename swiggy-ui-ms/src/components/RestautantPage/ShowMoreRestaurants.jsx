import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SortRestaurants from './SortRestaurants';
import Navigator from './Navigator';

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
    height: 190px;
    background: inherit;
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    margin: auto;
    margin-top: 80px;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: left;
    text-transform: capitalize;
    cursor: pointer;
    contain: strict;
`;

const ShowMoreRestaurants = (props) => {
    const [filter, setFilter] = useState('');
    // const { filter } = props.location.filter;
    useEffect(() => {
        if (
            props.location.filter !== undefined ||
            props.location.filter !== null ||
            props.location.filter !== ''
        ) {
            setFilter(props.location.filter);
        } else {
            setFilter('all');
        }
    }, []);
    // setFilter(props.location.filter);
    // console.log('props.location.filter', props.location.filter, filter);
    return (
        <>
            <Navigator />
            <Wrapper>
                <div className='container-fluid' style={{ width: '90%' }}>
                    <div className='row row-cols-1'>
                        {filter === 'top_pick' ? (
                            <Title className='col row-cols-1'>
                                <div className='row'>
                                    <div className='col text-left'>
                                        Top Picks
                                    </div>
                                    <div class='w-100'></div>
                                    <h4 className='col text-left'>
                                        List of most popular brands in your
                                        neighborhood
                                    </h4>
                                </div>
                            </Title>
                        ) : filter === 'veg' ? (
                            <Title className='col row-cols-1'>
                                <div className='row'>
                                    <div className='col text-left'>
                                        veg only
                                    </div>
                                    <div class='w-100'></div>
                                    <h4 className='col text-left'>
                                        Popular vegetarian restaurants near you
                                    </h4>
                                </div>
                            </Title>
                        ) : filter === 'newly_added' ? (
                            <Title className='col row-cols-1'>
                                <div className='row'>
                                    <div className='col text-left'>Premium</div>
                                    <div class='w-100'></div>
                                    <h4 className='col text-left'>
                                        Premium restaurants for near you
                                    </h4>
                                </div>
                            </Title>
                        ) : (
                            <Title className='col row-cols-1'>
                                <div className='row'>
                                    <div className='col text-left'>
                                        Exclusive
                                    </div>
                                    <div class='w-100'></div>
                                    <h4 className='col text-left'>
                                        Swiggy only Exclusive restaurants near
                                        you
                                    </h4>
                                </div>
                            </Title>
                        )}
                        <div
                            className='col'
                            style={{
                                backgroundColor: 'white',
                            }}
                        >
                            {' '}
                            <SortRestaurants filter={props.location.filter} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default ShowMoreRestaurants;
