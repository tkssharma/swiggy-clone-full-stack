import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  font-family: sans-serif;
  h6 {
    font-weight: bolder;
    color: #8a838c;
    font-size: 30px;
  }
  p {
    color: #93959f;
    font-size: 16px;
    font-weight: 300;
    max-width: 218px;
  }
`;

function EmptyCart() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h6 className="mb-4 mt-4">Cart Empty</h6>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
              alt="empty cart"
              className="w-100"
            />
            <p className="mt-4 text-left">
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default EmptyCart;
