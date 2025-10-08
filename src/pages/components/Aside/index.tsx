import React, { useState } from 'react'
import { Menu, Layout} from 'antd';
import logo from '@/assets/logo.png';
import MenuConfig from '@/config';
import type { MenuItemType } from 'antd/es/menu/interface';
import { AsideProps } from '@/types/common';
import { icon2Element } from '@/utils/common';
import { useNavigate } from 'react-router-dom';
// 如果是一些固定的静态数据，定义在函数组件外就行
// 反之如果是需要与state打交道的数据，就定义在函数组件里

// 递归生成菜单项
const generateMenuItems = (menuConfig: any[]): MenuItemType[] => {
  return menuConfig.map((configItem) => {
    const item: any = {
      key: configItem.path,
      icon: configItem.icon ? icon2Element(configItem.icon) : null,
      label: configItem.label
    }

    // 如果有子菜单，递归处理
    if(configItem.children && configItem.children.length > 0) {
      item.children = generateMenuItems(configItem.children);
    }
    
    return item;
  });
}

const items: MenuItemType[] = generateMenuItems(MenuConfig);

const Aside: React.FC<AsideProps> = (props) => {
  const { Sider } = Layout;
  const {isCollapse} = props;
  const navigate = useNavigate();
  const goto = (e: any)=>{
    navigate(e.key);
  }
  return (
    <Sider 
        trigger={null} 
        collapsed={isCollapse} 
        className="sidebar"
      >
        <div className="logo">
          {isCollapse ? (
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
          defaultSelectedKeys={['/home']}
          items={items}
          className="menu"
          onClick={goto}
        />
      </Sider>
  )
}
export default Aside;