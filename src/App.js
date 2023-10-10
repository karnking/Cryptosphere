import React, { useState } from 'react'
import Home from './components/Home'
import AllRoutes from './components/AllRoutes'
import { Button } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'

const App = () => {
  const [show,setShow] = useState(true)
  if(!show)
   return <AllRoutes />
  return <>
    <Home />
    <Button className='but' onClick={()=>setShow(false)}>
        <UpCircleOutlined />
      </Button>
  </>
}

export default App