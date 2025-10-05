import React from 'react'
import { Button, Layout, Menu, theme } from 'antd';
import logo from '@/assets/logo.png';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const Aside = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        className="sidebar"
      >
        <div className="logo">
          {collapsed ? (
            <img src={logo} alt="Logo" className="logo-img-collapsed" />
          ) : (
            <div className="logo-expanded">
              <img src={logo} alt="Logo" className="logo-img" />
              <h1 className="logo-text">管理系统</h1>
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '用户管理',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '商品管理',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '订单管理',
            },
          ]}
          className="menu"
        />
      </Sider>
  )
}
export default Aside;
