import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,

} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import LineChart from "./LineChart";
import Loader from "./Loader";

const { Title, Text } = Typography;

const CryptoWallet = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Title>Add Money</Title>
        </Col>
        <Col span={12}>
          <Title>Order</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title>Holdings</Title>
        </Col>
      </Row>
    </>
  );
};

export default CryptoWallet;