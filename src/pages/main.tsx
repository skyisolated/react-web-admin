import React, { useState } from 'react';

import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Aside from './components/Aside';
import MyHeader from './components/Header';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="layout-container">
      <Aside></Aside>
      <Layout className="main-content">
        <MyHeader></MyHeader>
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