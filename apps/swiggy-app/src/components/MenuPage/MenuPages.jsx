import React, { Component, useEffect } from 'react';
import Navigator from '../../components/molecules/NavHeader';
import styled from 'styled-components';
import RestaurantCards from './RestaurantCards';
import Options from './Options';
import Cart from './Cart';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurantData } from '../../redux/actions/restaurant.action'

const Wrapper = styled.div`
  font-family: sans-serif;
  margin-top: 5%;
  font-size: 14px;
  line-height: 1.2;
  color: #babbbf;

  .thin {
    background: #fafafb;
  }
  .middlePart {
    background: #171a29;

    height: 245px;
    pointer-events: none;
  }
  p {
    margin-bottom: 1px;
    font-weight: bolder;
  }

  img {
    height: 165px;
    margin: 30px 0px 0px 200px;
  }

  h1 {
    margin-top: 12%;
    color: white;
    font-size: 32px;
    font-weight: 300;
  }

  h2 {
    font-size: 32px;
    letter-spacing: -0.3px;
    font-weight: bolder;
    color: #282c3f;
    line-height: 1.2;
    margin-bottom: 0px;
  }

  small {
    color: #686b78;
    margin-top: 0px;
    font-weight: bolder;
  }

  .offers {
    padding: 31px 40px 25px 25px;
  }

  .newOffer {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background: #171a29;
    z-index: 8;
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    position: absolute;
    top: 34px;
    left: 19px;
  }
`;

function Menupages() {
  const { id } = useParams();
  const restaurant = useSelector(state => state.restaurant.selectedRestaurant) || {};
  const dispatch  = useDispatch()
  useEffect(() => {
   dispatch(getRestaurantData(id))
    return () => null;
  }, [id])
  console.log(restaurant);
  return (
    <div>
      <Navigator />
      <Wrapper>
        <div className="container-fluid thin">
          <div className="row">
            <div className="col-12 my-1 text-left">
              <small
                className="text-muted"
                style={{
                  marginLeft: '15%',
                  position: 'sticky',
                }}
              >
                Home / Delhi / {restaurant.name}
              </small>
            </div>
          </div>
        </div>
        <div className="container-fluid middlePart">
          <div className="row">
            <div className="col-4">
              <img src={restaurant.logo_url} alt="restaurantImage" />
            </div>
            <div className="col-4 text-left">
              <h1>{restaurant.name}</h1>
              <div>{restaurant.cuisines}</div>
              <div className="my-2">Delhi</div>
              <div className="row mt-3">
                <div
                  className="col-3"
                  style={{
                    borderRight: '1px solid #babbbf',
                  }}
                >
                  <p>
                    <i className="fas fa-star mr-1"></i>
                    {restaurant.rating}
                  </p>
                  <small>1000+ Ratings</small>
                </div>
                <div
                  className="col-3"
                  style={{
                    borderRight: '1px solid #babbbf',
                  }}
                >
                  <p>{restaurant.average_time} mins</p>
                  <small>Delivery Time</small>
                </div>
                <div
                  className="col-3"
                  style={{
                    borderRight: '1px solid #babbbf',
                  }}
                >
                  <p>
                    <i className="fas fa-rupee-sign mr-1"></i>
                    {restaurant.average_cost}
                  </p>
                  <small>Cost for Two</small>
                </div>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="row">
                <div className="newOffer">OFFER</div>
                <div
                  className="col-lg-7 ml-4 mt-5 offers"
                  style={{
                    border: '1px solid white',
                    height: '150px',
                  }}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <p
                        className="text-left ml-2 mt-2"
                        style={{
                          fontSize: '13px',
                          opacity: 0.9,
                          lineHeight: 1.2,
                          fontWeight: 550,
                          color: '#ffffff',
                        }}
                      >
                        50% off up to ₹100 on select items | Use code SPECIALS
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <p
                        className="text-left ml-2 mt-2"
                        style={{
                          fontSize: '13px',
                          opacity: 0.9,
                          lineHeight: 1.2,
                          fontWeight: 550,
                          color: '#ffffff',
                        }}
                      >
                        40% off up to ₹80 + ₹30 PhonePe cashback | Use code SWIGGYIT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div
        className="container-fluid"
        style={{
          overflowX: 'hidden',
        }}
      >
        <div className="row ml-5">
          <div className="col-3 ml-5 mt-4">
            <Options />
          </div>{' '}
          <div
            className="col-5"
            style={{
              maxHeight: '88.9vh',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
            }}
          >
            {restaurant.restaurant_menu &&
              restaurant.restaurant_menu.map((elem) => (
                <div key={elem.id}>
                  <h2
                    className="text-left ml-3 mt-4"
                    style={{
                      marginLeft: '1.4rem !important',
                      color: '#282c3f',
                      fontWeight: 'bolder',
                    }}
                  >
                    {elem.type}
                  </h2>
                  <small className="text-left" style={{ marginLeft: '-79.5%' }}>
                    23 ITEMS
                  </small>

                  {restaurant.restaurant_menu &&
                    restaurant.restaurant_menu
                      .filter((item) => item.type === elem.type)
                      .map((item) => (
                        <div className="col pt-1 text-left">
                          <RestaurantCards key={item.id} data={item} />
                        </div>
                      ))}
                </div>
              ))}
          </div>
          <div className="col-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menupages;
