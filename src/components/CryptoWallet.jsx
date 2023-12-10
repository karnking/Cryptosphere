import React, { useState } from "react";
import millify from "millify";
import { Col, Row, Typography, Table, Grid, Button, Select } from "antd";
import {
  PlusSquareOutlined,
  PlusSquareFilled
} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { options } from "./razorPayintegration";
import { EDIT_USER } from "../services/user/actionType";
import { editUser } from "../services/user/action";
import axios from "axios";

const { Title, Text, Card, Space } = Typography;

const columns = [
  {
    title: 'Crypto',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Units',
    dataIndex: 'units',
  },
  {
    title: 'Bought At',
    dataIndex: 'bought_at',
  },
  {
    title: 'LTP',
    dataIndex: 'LTP',
  },
  {
    title: 'Total Value',
    dataIndex: 'value',
  },
  {
    title: 'Total Profit/Loss',
    dataIndex: 'p/l',
  },
];

const CryptoWallet = () => {
  const { user } = useSelector(state => state.user.user)
  const { coinId } = useParams()
  const dispatch = useDispatch()
  const handlePayment = () => {
    const rzp = new window.Razorpay(options);
    rzp.open()
    dispatch(editUser({ ...user, amount: Number(user.amount) + Number(1000) }))
  }
  const [userCryptos, setUserCryptos] = useState([])
  const getUserCryptos = async () => {
    try {
      const resonse = await axios.get(`https://nice-tan-butterfly-sari.cyclic.app/allCrypto/${user._id}`)
      setUserCryptos(resonse.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Row style={{ padding: '2em' }}>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#0060bb', fontWeight: 'bold' }}>Add Money</Title>
          <PlusSquareFilled onClick={handlePayment} style={{ fontSize: '3em' }} />
          <Title level={4} style={{ marginTop: '1em', color: '#0060bb' }}>Available Balance : {user.amount}</Title>
        </Col>
        <Col span={2}></Col>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', marginTop: '10px', color: '#0060bb', fontWeight: 'bold' }}>Order</Title>
          {coinId ? <div>Buy</div>
            : <Button type="primary" size='large' style={{ borderRadius: '2em', background: '#0060bb', marginTop: '1em' }}>Place an Order</Button>
          }
        </Col>
      </Row>
      <Row style={{ padding: '2em' }}>
        <Col span={24}>
          <Title>Holdings</Title>
          <div style={{ border: '2px solid black', padding: '2em' }}>
            <Table
              rowSelection={{
                type: 'checkbox',
                // ...rowSelection,
              }}
              columns={columns}
              dataSource={userCryptos}
              
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CryptoWallet;