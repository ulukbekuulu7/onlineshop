import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Basket from "./components/pages/Basket";
import Favorites from "./components/pages/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        background: dark ? "#2C2B2B" : "",
        minHeight: "100vh",
      }}
    >
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
