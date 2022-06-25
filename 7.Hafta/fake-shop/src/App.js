import "./App.css";

import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing/>} />
          <Route exact path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 not found!</Route>
        </Routes>
      </Router>

    </div>
  );
}
