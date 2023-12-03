import { Button, Image, Typography } from 'antd'
import React from 'react'
import "../home.css"
import icon from "../images/1_HTC1oMKYwC7a8vUBsiplhw.gif"
const Home = () => {
  return (
    <div>
      <Typography.Title className='tite'>
        Explore the world of Crypto
      </Typography.Title>
      <img style={{overflow:'hidden',zIndex:'-1',position:'fixed', top:'0', left: '0', height:'100vh', width: '100vw'}} src={icon} />
    </div>
  )
}

export default Home