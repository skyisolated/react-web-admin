import React, { useState } from 'react'
import { Menu, Layout } from 'antd';
import logo from '@/assets/logo.png';
import MenuConfig, { MenuItemConfig } from '@/config';
import type { MenuItemType } from 'antd/es/menu/interface';
import { AsideProps, TabItem } from '@/types/common';
import { icon2Element } from '@/utils/common';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMenuList } from '@/store/reducers/tab';

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
    if (configItem.children && configItem.children.length > 0) {
      item.children = generateMenuItems(configItem.children);
    }

    return item;
  });
}

const items: MenuItemType[] = generateMenuItems(MenuConfig);

const Aside: React.FC<AsideProps> = (props) => {
  const { Sider } = Layout;
  const { isCollapse } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setTabList = (val: TabItem) => {
    dispatch(selectMenuList(val));
  }
  const goto = (e: any) => {
    let data:MenuItemConfig | undefined; // 记录这次点击的路由信息，在MenuConfig中的哪条记录
    MenuConfig.forEach((item: MenuItemConfig) => {
      if (item.path === e.keyPath[e.keyPath.length - 1]) {
        data = item;
        // 如果有二级菜单
        if (e.keyPath.length > 1 && item.children) {
          data = item.children.find(child => {
            return child.path == e.key;
          });
        }
      }
    });
    if (data) {
      setTabList({
        path: data.path,
        name: data.name,
        label: data.label
      });
    }
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