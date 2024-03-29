import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  WalletOutlined 
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [clicked,setClicked] = useState(0)
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize,clicked]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/Cryptosphere">Cryptosphere</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link onClick={()=> setClicked((last)=>last+1)} to="/Cryptosphere">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link onClick={()=> setClicked((last)=>last+1)} to="/Cryptosphere/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link onClick={()=> setClicked((last)=>last+1)} to="/Cryptosphere/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<WalletOutlined />}>
            <Link onClick={()=> setClicked((last)=>last+1)} to="/Cryptosphere/wallet">Wallet</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link onClick={()=> setClicked((last)=>last+1)} to="/Cryptosphere/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
export default NavBar;
