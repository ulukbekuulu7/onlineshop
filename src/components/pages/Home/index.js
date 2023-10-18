import "./index.scss";

import React from "react";
import four from "../../../img/four.jpg";
import one from "../../../img/one.jpg";
import three from "../../../img/three.jpg";
import two from "../../../img/two.jpg";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <h1>
            Browse Categories of <br /> The Store
          </h1>
          <div className="home--img">
            <div>
              <img src={one} alt="" className="home--1" />
              <img src={two} alt="" className="home--2" />
            </div>
            <img src={three} alt="" className="home--3" />
            <img src={four} alt="" className="home--4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
