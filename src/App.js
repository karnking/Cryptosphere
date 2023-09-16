import React from "react";
import {  Route, Link, Routes } from "react-router-dom";

import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  NavBar,
  Exchanges,
  Homepage,
  Example,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/Cryptosphere">
                <Homepage />
                {/* <h1>Homepage</h1> */}
              </Route>
              <Route path="/Cryptosphere/exchanges">
                <Exchanges />
              </Route>
              <Route path="/Cryptosphere/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/Cryptosphere/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route path="/Cryptosphere/news">
                <News />
              </Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptosphere <br />
            All rights not reserved
          </Typography.Title>
          <Space>
            <Link to="/Cryptosphere">Home</Link>
            <Link to="/Cryptosphere/exchanges">Exchanges</Link>
            <Link to="/Cryptosphere/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
