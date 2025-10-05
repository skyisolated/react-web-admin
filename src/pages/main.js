import React, { useState } from 'react';

import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Aside from './components/Aside';
const { Header, Sider, Content } = Layout;

const App = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="layout-container">
      
      <Layout className="main-content">
        <Header
          style={{ 
            padding: 0, 
            background: colorBgContainer 
          }}
          className="header"
        >
          <Button
            type="text"
            // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            // onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
            className="trigger"
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="content-wrapper"
        >
          <div className="page-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;