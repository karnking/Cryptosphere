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
  getCdetail,
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
import { render } from "@testing-library/react";

const { Title, Text, Card, Space } = Typography;

const columns = [
  {
    title: 'Crypto',
    dataIndex: 'name',
    render: (text, record) => <div style={{ display: 'flex', gap: '5px' }}><a>{text}</a><img src={record.image} height={'20px'} width={'20px'} /></div>,
  },
  {
    title: 'Units',
    dataIndex: 'tokens',
    render: (tokens) => <b>{Math.round(tokens*10000)/10000}</b>
  },
  {
    title: 'Bought At',
    dataIndex: 'date',
    render: (date) => <b>{`${date}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</b>
  },
  {
    title: 'Buy Avg',
    dataIndex: 'bought_price',
    render: (text)=><b>{Math.round(Number(text)*100)/100} $</b>
  },
  {
    title: 'Total Value',
    dataIndex: 'total_value',
    render: (total_value) => <b>{total_value} $</b>
  },
  {
    title: 'Total Profit/Loss',
    dataIndex: 'p/l',
    render: (total_value,record) => <b style={{color:'green'}}>0 %</b>
  },
];

const CryptoWallet = () => {
  const { user } = useSelector(state => state.user.user)
  const { coinId } = useParams()
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [userCryptos, setUserCryptos] = useState([])
  const [table, setTable] = useState([])
  const [coinData, setCoindata] = useState({})
  const [amount, setAmount] = useState(100)
  const [tk, setTk] = useState(0)
  const [overBudget, setOverBudget] = useState(false)
  const [currUser,setCurrUser] = useState({})
  const dispatch = useDispatch()
  useEffect(()=>{setCurrUser(user)},[user])
  const handlePayment = () => {
    if (!user.money_added_date && user.money_added_date != '' + (new Date().getDate())) {
      dispatch(editUser({ ...user, amount: Number(user?.amount) + Number(1000), money_added_date: '' + (new Date().getDate()) }))
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
      console.log(currUser)
      const resonse = await axios.get(`https://nice-tan-butterfly-sari.cyclic.app/crypto/allCrypto/${user?._id}`)
      setTable(resonse.data.cryptos)
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(()=>{
  //   if(userCryptos.length>0){
  //     console.log('here')
  //     let data = []
  //     userCryptos?.map((ele) => {
  //       const coin = getCdetail(ele.crypto_id)
  //       .then((d)=>{
  //         data.push(d.data.coin.price)
  //       })
  //     })
  //     console.log(data)
  //   }
  // },[userCryptos])
  // const []
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  useEffect(()=>{
    getUserCryptos()
  },[currUser])
  useEffect(() => {
    setCoindata(data?.data)
  }, [data])
  useEffect(() => {
    let price = coinData?.coin?.price
    let ans = (1 / Math.round(price)) * amount
    setTk(Math.round(ans * 10000) / 10000)
  }, [coinData, amount])
  const [btnLoading, setBtnLoading] = useState(false)
  const [errorBuy, setErrorBuy] = useState(0)
  const boughtCrypto = () => {
    setLoading(true)
    dispatch(editUser({...user,amount:Number(user?.amount)-Number(amount)}))
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }
  const buyCrypto = async () => {
    if (tk > 0) {
      setBtnLoading(true)
      let obj = {
        crypto_id: coinData.coin.uuid,
        name: coinData.coin.name,
        image: coinData.coin.iconUrl,
        bought_price: Math.round((coinData.coin.price) * 100) / 100,
        date: '' + ((new Date()).getDate()),
        tokens: tk,
        total_value: Number(amount),
        user_id: user._id
      }
      try {
        const resonse = await axios.post(`https://nice-tan-butterfly-sari.cyclic.app/crypto/buy`, obj)
        setErrorBuy(2)
        setBtnLoading(false)
        boughtCrypto()
      } catch (error) {
        console.log(error)
        setErrorBuy(1)
        setBtnLoading(false)
      }
      setTimeout(() => {
        setErrorBuy(0)
      }, 2000)
    } else {
      setErrorBuy(3)
      setTimeout(() => {
        setErrorBuy(0)
      }, 2000)
    }
  }
  const logout = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch({ type: LOGOUT_USER })
      setLoading(false)
    }, 2000)
  }
  const handleInput = (value) => {
    if (value < user?.amount) setAmount(value)
    else {
      setAmount(0)
      setOverBudget(true)
      setTimeout(() => {
        setOverBudget(false)
      }, 2000)
    }
  }
  if (isFetching || loading) return <Loader />
  return (
    <>
      <div>
        <Button onClick={logout} icon={<LogoutOutlined />} type="primary" style={{ background: '#0060bb', borderRadius: '5px', fontWeight: 'bold', padding: '20px', alignItems: 'center', display: 'flex', marginLeft: 'auto' }}>Log Out</Button>
      </div>
      <Row style={{ padding: '2em' }}>
        <Col span={11} style={{ borderRadius: '1em', color: '#0060bb', textAlign: 'center', border: '2px solid #0060bb', padding: '1em' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#0060bb', fontWeight: 'bold' }}>Add Money</Title>
          <PlusSquareFilled onClick={handlePayment} style={{ fontSize: '3em' }} />
          <Title level={4} style={{ marginTop: '1em', color: '#0060bb' }}>Available Balance : {user?.amount ? millify(Number(user?.amount)): 0}</Title>
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
                  <td><InputNumber value={Number(amount)} onChange={handleInput} style={{ width: '5em' }} /></td>
                  <td>{tk}</td>
                </tr>
              </table>
              <Button type="primary" loading={btnLoading} onClick={buyCrypto} style={{ background: '#0060bb' }}>Buy Now</Button>
              {overBudget && <Alert message={"Not Enough Balance"} type="error" showIcon />}
              {errorBuy == 1 ? <Alert message={"Try again later"} type="error" showIcon />
                : errorBuy == 3 ? <Alert message={"Too small lot/amount"} type="error" showIcon />
                  : errorBuy == 2 ? <Alert message={"Transaction Successfull"} type="success" showIcon /> : ''}
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
              dataSource={table}

            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CryptoWallet;