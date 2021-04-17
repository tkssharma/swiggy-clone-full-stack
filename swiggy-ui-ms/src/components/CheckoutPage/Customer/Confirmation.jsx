import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Confirmation() {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/Restaurants');
        }, 3000);
    }, []);
    return (
        <div>
            <div className='container'>
                <div>
                    <img
                        src='https://trioangleblog.s3-us-west-2.amazonaws.com/trioangle/images/swiggy-banner.svg'
                        alt='swiggy'
                    />
                    <div>
                        <h2
                            className='text-success'
                            style={{
                                fontFamily: 'sans-serif',
                                fontSize: '50px',
                            }}
                        >
                            ORDER CONFIRMED
                        </h2>
                    </div>
                    <img
                        src='https://www.flaticon.com/svg/static/icons/svg/845/845646.svg'
                        alt='CheckMark'
                        style={{
                            width: '80px',
                            marginTop: '40px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
