import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Carditems from './Carditems';
import { useHistory } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import { useEffect } from 'react';
import { handlecartupdate } from './Redux/action';
import MiniCart from './MiniCart';

const Wrapper = styled.div`
    font-family: sans-serif;

    .sticky {
        position: sticky;
        top: 150px;
    }

    h4 {
        font-size: 25px;
        font-weight: bolder;
        text-align: left;
        padding-top: 20px;
        color: #282c3f;
        margin-bottom: 0px;
    }

    p {
        margin-top: 0px;
        margin-bottom: 4px;
        font-size: 13px;
        font-weight: bold;
        margin-left: 2px;
    }

    .veg {
        border-radius: 50%;
        margin-top: 2px;
        width: 10px;
        height: 10px;
        background: green;
        margin-left: 2px;
    }

    .nonVeg {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background: red;
        margin-top: 2px;
        margin-left: 2px;
    }

    small {
        font-weight: bold;
    }

    .buttoncart {
        margin-left: 0;
        margin-right: 0;
        border: none;
        background: white;
        padding: 5%;
        color: green;

        .customCart {
            width: 300px;
            max-height: 100px;
            overflow-y: scroll;
            overflow-x: hidden;
            margin-top: 13px;
            margin-bottom: 10px;
        }
    }
`;

function Cart() {
    const history = useHistory();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        history.push('/CheckoutPage');
    };
    useEffect(() => {
        dispatch(handlecartupdate());
    }, []);
    return (
        <Wrapper>
            <div className='text-left sticky'>
                {state.cart && state.cart.length > 0 ? (
                    <>
                        <h4>Cart</h4>
                        <p className='text-muted'>
                            {state.cart.reduce((a, b) => a + b.qty, 0)} ITEMS
                        </p>
                        <div
                            className='customCart'
                            style={{
                                width: '300px',
                                maxHeight: '100px',
                                overflowY: 'scroll',
                                overflowX: 'hidden',
                                marginTop: '13px',
                                marginBottom: '10px',
                            }}
                        >
                            {state.cart.map(
                                (item) =>
                                    item.qty > 0 && <Carditems data={item} />,
                            )}
                        </div>
                        <div>
                            <div className='row'>
                                <div className='col-6 text-left'>
                                    <h6 className='mt-3 font-weight-bold mb-0'>
                                        Subtotal
                                    </h6>
                                    <small className='text-muted font-weight-normal'>
                                        Extra charges may apply
                                    </small>
                                </div>
                                <div className='col-4 mt-3 text-right mr-2'>
                                    <b>
                                        {' '}
                                        ₹
                                        {state.cart.reduce(
                                            (a, b) => a + b.qty * b.price,
                                            0,
                                        )}
                                    </b>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3 pr-5'>
                            <button
                                className='btn btn-block btn-lg btn-success'
                                style={{ borderRadius: '0px' }}
                                onClick={handleCheckout}
                            >
                                <h6 className='mt-2'>CHECKOUT</h6>
                            </button>
                        </div>
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
            {/* <MiniCart /> */}
        </Wrapper>
    );
}

export default Cart;
