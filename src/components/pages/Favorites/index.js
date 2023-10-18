import "./index.scss";

import { ADD_TO_BASKET, ADD_TO_MINUS } from "../../../redux/ActionTypes";
import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
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
    <div id="favorites">
      <div className="container">
        <div className="favorites">
          {basket.map((el) => (
            <div className="favorites--image">
              <div className="favorites--image__img">
                <img width={300} src={el.image} alt="" />
              </div>
              <div className="favorites--image__btn">
                <div className="favorites--image__btn--but">
                  <h1>{el.title}</h1>
                  <h2>{el.count * el.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
