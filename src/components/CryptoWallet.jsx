import React, { useEffect, useState, useMemo } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Col, Row, Typography, Alert, Table, Grid, Button, Select, InputNumber } from "antd";
import {
  PlusSquareFilled,
  LogoutOutlined,
  MinusSquareFilled
} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { options } from "./razorPayintegration";
import { EDIT_USER, LOGOUT_USER } from "../services/user/actionType";
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
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [userCryptos, setUserCryptos] = useState([])
  const [coinData, setCoindata] = useState({})
  const [amount, setAmount] = useState(100)
  const [tk, setTk] = useState(0)
  const [overBudget, setOverBudget] = useState(false)

  const dispatch = useDispatch()

  const handlePayment = () => {
    if (!user.money_added_date && user.money_added_date != '' + (new Date().getDate())) {
      dispatch(editUser({ ...user, amount: Number(user.amount) + Number(1000), money_added_date: '' + (new Date().getDate()) }))
      const rzp = new window.Razorpay(options);
      rzp.open()
    } else {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    }
  }
  const getUserCryptos = async () => {
    try {
      const resonse = await axios.get(`https://nice-tan-butterfly-sari.cyclic.app/allCrypto/${user._id}`)
      setUserCryptos(resonse.data)
    } catch (error) {
      console.log(error)
    }
  }
  // const []
  const { data } = useGetCryptoDetailsQuery(coinId);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setCoindata(data?.data) }, 2000)
  }, [data])
  useEffect(() => {
    let price = coinData?.coin?.price
    let ans = (1 / Math.round(price)) * amount
    setTk(Math.round(ans * 10000) / 10000)
  }, [coinData, amount])
  const buyCrypto = async () => {
    console.log(coinData)
    // try {
    //   const resonse = await axios.post(`https://nice-tan-butterfly-sari.cyclic.app/buy`, {
    //     name: data.name,
    //     image: data.iconUrl,
    //     bought_at: Math.round((data.price + Number.EPSILON) * 100) / 100,
    //     date: '' + ((new Date()).getDate()),
    //     tokens: (1 / Math.round(price)) * amount,
    //     total_value: amount,
    //     user_id: user._id
    //   })
    //   setUserCryptos(resonse.data)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  const logout = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch({ type: LOGOUT_USER })
      setLoading(false)
    }, 2000)
  }
  const handleInput = (value) => {
    if (value < user.amount) setAmount(value)
    else {
      setAmount(0)
      setOverBudget(true)
      setTimeout(() => {
        setOverBudget(false)
      }, 2000)
    }
  }
  if (loading) return <Loader />
  return (
    <>
      <div>
        <Button onClick={logout} icon={<LogoutOutlined />} type="primary" style={{ background: '#0060bb', borderRadius: '5px', fontWeight: 'bold', padding: '20px', alignItems: 'center', display: 'flex', marginLeft: 'auto' }}>Log Out</Button>
      </div>
      <Row style={{ padding: '2em' }}>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#0060bb', fontWeight: 'bold' }}>Add Money</Title>
          <PlusSquareFilled onClick={handlePayment} style={{ fontSize: '3em' }} />
          <Title level={4} style={{ marginTop: '1em', color: '#0060bb' }}>Available Balance : {millify(user.amount)}</Title>
          {showAlert && <Alert message={"Funds limit over for today!"} type="error" showIcon />}
        </Col>
        <Col span={2}></Col>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', marginTop: '10px', color: '#0060bb', fontWeight: 'bold' }}>Order</Title>
          {!coinId
            ? <Link to='/Cryptosphere/cryptocurrencies'><Button type="primary" size='large' style={{ borderRadius: '2em', background: '#0060bb', marginTop: '1em' }}>Place an Order</Button></Link>
            : <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
              <table>
                <tr style={{ color: 'black' }}>
                  <th >Coin Name</th>
                  <th >Current Price</th>
                  <th >Invest</th>
                  <th >Quantity</th>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td>{coinData?.coin?.name || 'Coin'}</td>
                  <td strong>{Math.round(coinData?.coin?.price * 100) / 100}</td>
                  <td><InputNumber value={amount} onChange={handleInput} style={{ width: '5em' }} /></td>
                  <td>{tk}</td>
                </tr>
              </table>
              <Button type="primary" onClick={buyCrypto} style={{ background: '#0060bb' }}>Buy Now</Button>
              {
                overBudget && <Alert message={"Not Enough Balance"} type="error" showIcon />
              }
            </div>
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