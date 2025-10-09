import { Avatar, Button, Dropdown, Layout, MenuProps } from 'antd';
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import avatar from '@/assets/avatar.png';
import './index.css';
import { HeaderProps } from '@/types/common';
import { useDispatch } from 'react-redux';
import {collapseMenu} from "@/store/reducers/tab";
import { useNavigate } from 'react-router-dom';


const MyHeader: React.FC<HeaderProps> = (props) => {
  const {isCollapse} = props;
  const { Header } = Layout;
  // 通过dispath调用reducer，修改store中的变量值。和dvajs用法类似
  const dispath = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }
  const setCollapsed = () => { 
    dispath(collapseMenu());
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" onClick={logout} rel="noopener noreferrer" >
          退出
        </a>
      )
    }
  ];
  return (
    <Header
      style={{
        padding: 20,
        background: '#001529'
      }}
      className="header-container"
    >
      <Button
        type="text"
        icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed()}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
          backgroundColor: '#fff'
        }}
        className="trigger"
      />

      <Dropdown menu={{ items }}>
         <Avatar shape='circle' size={40} src={avatar} />
      </Dropdown>
    </Header>
  )
}
export default MyHeader;
