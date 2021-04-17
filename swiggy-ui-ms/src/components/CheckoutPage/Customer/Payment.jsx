import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import Confirmation from "./Confirmation";
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    font-family: system-ui !important;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    padding-top: 35px;
    padding-bottom: 39px;
    div {
        // border: 1px solid red;
    }
`;

const Logo = styled.div`
    left: -35px;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    padding: 0px !important;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #282c3f;
`;

const Wallet = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const WarningText = styled.p`
    font-size: 13px;
    color: #93959f;
    margin-bottom: 8px;
    font-weight: 300;
    line-height: 16px;
    overflow: hidden;
    border: 1px dashed #60b246;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

function Payment() {
    const history = useHistory();
    const state = useSelector((state) => state);
    let Total = state.cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price),
        50,
    );

    async function handlePayment(e) {
        // console.log(Total);
        e.preventDefault();

        const API_URL = `${process.env.REACT_APP_API_URL}/api/razor/`;
        const orderUrl = `${API_URL}order/${Total}`;
        const response = await Axios.get(orderUrl);
        const { data } = response;

        const options = {
            key: 'rzp_test_RasK5It8i6ASFZ',
            name: 'RazorPay',
            description: 'Integration of Razorpay',
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}/${Total}`;
                    const captureResponse = await Axios.post(url, {});
                    const successObj = JSON.parse(captureResponse.data);
                    const captured = successObj.captured;
                    if (captured) {
                        console.log('success');
                    }
                } catch (err) {
                    console.log(err);
                } finally {
                    handleData();
                }
            },
            theme: {
                color: '#e46d47',
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const handleData = () => {
        const hotel = JSON.parse(localStorage.getItem('hotel'));
        const customerId = JSON.parse(localStorage.getItem('customerData'))._id;
        const address = JSON.parse(localStorage.getItem('CustomerCurrentLoc'));
        const cart = JSON.parse(localStorage.getItem('cart'));

        let items = [];

        cart.map((item) => {
            let temp = {
                name: item.name,
                price: item.price,
                quantity: item.qty,
                veg: item.veg,
            };
            items.push(temp);
        });

        let data = {
            restaurant_id: hotel._id,
            restaurant_name: hotel.name,
            location: hotel.geometry.coordinates,
            address_1: address.flat_no,
            address_2: address.landmark,
            img_url: hotel.img_url,
            items: items,
        };
        // console.log(data);
        // console.log(customerId);

        var config = {
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}/api/customer/order/${customerId}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                history.push('/Confirmation');
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    return (
        <>
            <>
                <Wrapper className='container'>
                    <div className='row'>
                        <Logo className='col-1'>
                            <Wallet src='Icons/wallet.svg' alt='placeholder' />
                        </Logo>
                        <div className='col-11'>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <Title>Payment</Title>
                                </div>
                                <WarningText className='col-10 ml-3 mb-3 '>
                                    Please use RazorPay as Payment method as
                                    other services are under Maintenance.
                                </WarningText>
                                <button
                                    className='btn btn-success btn-sm col-3 ml-3 mt-4'
                                    onClick={handlePayment}
                                    // onClick={handleData}
                                >
                                    <img
                                        src='https://razorpay.com/assets/razorpay-logo-white.svg'
                                        alt='RazorPay'
                                        style={{
                                            width: 'inherit',
                                            height: 'inherit',
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        </>
    );
}

export default Payment;
