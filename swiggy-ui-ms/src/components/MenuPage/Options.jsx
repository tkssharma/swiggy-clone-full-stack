import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: sans-serif;

    p {
        margin-left: 13%;
        font-size: 18px;
        color: #282c3f;
        margin-bottom: 5px;
        font-weight: bold;
        &:hover {
            color: #fc8019;
        }
    }
`;

function Options() {
    const data = JSON.parse(localStorage.getItem('hotel'));
    return (
        <div className='text-right mr-5 mt-2 ml-0'>
            <Wrapper>
                {data.categories && data.categories.map((item) => (
                    <p>{item}</p>
                ))}
            </Wrapper>
        </div>
    );
}

export default Options;
