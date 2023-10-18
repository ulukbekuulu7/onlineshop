import "./index.scss";

import { ADD_TO_BASKET, GET_PRODUCT } from "../../../redux/ActionTypes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Slider from "react-slick";
import { data } from "../../../data";

const Product = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PRODUCT, payload: data });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div id="product">
        <div className="container">
          <div className="product">
            <h1>
              Browse Categories of <br /> The Store
            </h1>
            <div>
              <Slider {...settings}>
                {product.map((el) => (
                  <div className="product--slid">
                    <div className="product--slid__img">
                      <img width={240} src={el.image} alt="" />
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.price} som</p>
                    <div className="product--slid__ion">
                      <button
                        onClick={() => {
                          dispatch({ type: ADD_TO_BASKET, payload: el });
                        }}
                      >
                        <FiShoppingCart />
                      </button>

                      <button
                        onClick={() => {
                          dispatch({ type: ADD_TO_BASKET, payload: el });
                        }}
                      >
                        <AiFillHeart />
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
