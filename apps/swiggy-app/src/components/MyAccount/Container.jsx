import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
  letter-spacing: 0;
  color: #171a29;
  font-family: sans-serif;
  // border: 1px solid red;
  div {
    // border: 1px solid red;
  }
`;

const Title = styled.p`
  // color: #282c3f;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.2;
  padding-top: 20px;
  margin-bottom: 0px;
  padding-bottom: 20px;
  // border: 1px solid red;
  &:hover {
    color: #171a29;
    font-size: 17px;
  }
  line-height: 1.5rem;
`;

const Icon = styled.img`
  // border: 1px solid red;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-left: 10px;
  // margin-bottom: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

const Container = () => {
  const data = [];
  return (
    <Wrapper>
      <div className="container-fluid p-5" style={{ width: '94%' }}>
        <div className="row">
          <div
            className="col row-cols-1 text-left pt-4 pb-4 pl-4 pr-0 text-capitalize"
            style={{
              background: '#edf1f7',
              maxWidth: '280px',
              minHeight: '600px',
            }}
          >
            <div
              className="col text-muted"
              style={{
                background: '#fff',
              }}
            >
              <Title
                style={{
                  color: '#171a29',
                }}
              >
                <Icon src="Icons/orders.svg" alt="orders" />
                orders
              </Title>
            </div>
            <div className="col text-muted">
              <Title>
                {' '}
                <Icon src="Icons/favorites.svg" alt="favorites" />
                favorites
              </Title>
            </div>
            <div className="col text-muted">
              <Title>
                {' '}
                <Icon src="Icons/payment.svg" alt="payments" />
                payments
              </Title>
            </div>
            <div className="col text-muted">
              <Title>
                {' '}
                <Icon src="Icons/address.svg" alt="address" />
                addresses
              </Title>
            </div>
          </div>
          <div className="col pl-5" style={{ paddingTop: '2.45rem' }}>
            <div className="col text-left mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
              Orders
            </div>
            <div className="w-100"></div>
            <div className="col row-cols-1">
              {data && data.orders && data.orders.map((item) => <OrderCard data={item} />)}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Container;
