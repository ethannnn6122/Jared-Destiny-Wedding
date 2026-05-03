import React from 'react';
import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavSider.module.css';

import {
  HomeOutlined,
  FormOutlined,
  ShoppingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/rsvp">RSVP</Link>,
    key: "/rsvp",
    icon: <FormOutlined />,
  },
  {
    label: <Link to="/registry">Gift Registry</Link>,
    key: "/registry",
    icon: <ShoppingOutlined />,
  },
  {
    label: <Link to="/details">Details</Link>,
    key: "/details",
    icon: <InfoCircleOutlined />,
  },
];

const NavSider = (props) => {
    const location = useLocation();
  return (
    <Sider className={classes.sider} trigger={null} collapsible collapsed={!props.isCollapsed}>
      <h1 className={classes.logo}>
        J&D
      </h1>
      <Menu 
        className={classes.navItems} 
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        items={menuItems} 
      />
    </Sider>
  );
};

export default NavSider;