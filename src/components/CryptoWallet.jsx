import React, { useState } from "react";
import millify from "millify";
import { Col, Row, Typography, Grid, Button, Select } from "antd";
import {
  PlusSquareOutlined,
  PlusSquareFilled
} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import LineChart from "./LineChart";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { Title, Text, Card, Space } = Typography;

const CryptoWallet = () => {
  const { user } = useSelector(state => state.user.user)
  const { coinId } = useParams()
  return (
    <>
      <Row style={{ padding: '2em' }}>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#0060bb', fontWeight: 'bold' }}>Add Money</Title>
          <PlusSquareFilled style={{ fontSize: '3em' }} />
          <Title level={4} style={{ marginTop: '1em', color: '#0060bb' }}>Available Balance : {user.amount}</Title>
        </Col>
        <Col span={2}></Col>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#0060bb', fontWeight: 'bold' }}>Order</Title>
          {coinId ? <div>Buy</div>
            : <Button type="primary" size='large' style={{borderRadius:'2em',background:'#0060bb',marginTop:'1.5em'}}>Place an Order</Button>  
        }
        </Col>
      </Row>
      <Row style={{ padding: '2em' }}>
        <Col span={24}>
          <Title>Holdings</Title>
          <div style={{border:'2px solid black',padding:'2em'}}>
            here holding
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CryptoWallet;