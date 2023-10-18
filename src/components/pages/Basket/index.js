import "./index.scss";

import { ADD_TO_BASKET, ADD_TO_MINUS } from "../../../redux/ActionTypes";
import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  console.log(basket);
  const save = (baskets) => {
    localStorage.setItem("basket", JSON.stringify(baskets));
  };
  useEffect(() => {
    save(basket);
  }, [basket]);
  useEffect(() => {
    dispatch({ type: ADD_TO_BASKET, payload: basket });
  }, [dispatch]);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <NavLink to="/product">
            <button>ghjk</button>
          </NavLink>

          {basket.map((el) => (
            <div className="basket--image">
              <div className="basket--image__img">
                <img width={300} src={el.image} alt="" />
              </div>
              <div className="basket--image__btn">
                <div className="basket--image__btn--but">
                  <h1>{el.title}</h1>
                  <h2>{el.count * el.price}</h2>
                  <span
                    onClick={() => {
                      dispatch({ type: ADD_TO_BASKET, payload: el });
                    }}
                    style={{
                      cursor: "pointer",
                      fontSize: "25",
                      background: "rgba(60,147,121,1)",
                      color: "#fff",
                    }}
                  >
                    +
                  </span>
                  <span
                    onClick={() => {
                      dispatch({ type: ADD_TO_BASKET, payload: el });
                    }}
                    style={{ fontSize: "25" }}
                  >
                    {el.count}
                  </span>
                  <span
                    onClick={() => {
                      dispatch({
                        type: ADD_TO_MINUS,
                        payload: el,
                      });
                    }}
                    style={{ cursor: "pointer", fontSize: "25" }}
                  >
                    -
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
