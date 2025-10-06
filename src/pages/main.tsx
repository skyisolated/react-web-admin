import React, { useState } from 'react';

import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Aside from './components/Aside';
import MyHeader from './components/Header';
import { useSelector } from 'react-redux';
import { AsideProps, HeaderProps } from '@/types/common';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // 从store中读取变量
  const isCollapse = useSelector((state:any) => state.tab.isCollapse);
  // 给sider的数据
  const asideItems: AsideProps = {
    isCollapse
  };
  // 给header的数据
  const headerItems: HeaderProps = {
    isCollapse
  };
  return (
    <Layout className="layout-container">
      <Aside {...asideItems}></Aside>
      <Layout className="main-content">
        <MyHeader {...headerItems}></MyHeader>
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
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;