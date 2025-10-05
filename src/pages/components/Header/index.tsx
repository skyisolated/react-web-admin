import { Avatar, Button, Layout } from 'antd';
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import avatar from '@/assets/avatar.png';
import './index.css';


const MyHeader = () => {
  const { Header } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  return (
      <Header
        style={{ 
          padding: 0, 
          background: '#001529' 
        }}
        className="header-container"
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          // onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 32,
            backgroundColor: '#fff'
          }}
          className="trigger"
        />
        <Avatar shape='circle' size={50} src={avatar} />
      </Header>
  )
}
export default MyHeader;
