import React from 'react'
import { Menu, Layout} from 'antd';
import logo from '@/assets/logo.png';
import MenuConfig from '@/config';
import * as Icon from '@ant-design/icons';
import type { MenuItemType } from 'antd/es/menu/interface';

const icon2Element = (iconName: string) =>{
  const IconComponent = Icon[iconName as keyof typeof Icon];
  // 检查是否是有效的图标组件
  if (IconComponent) {
    return React.createElement(IconComponent as any);
  }
  return null;
}

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

const Aside: React.FC = () => {
  const { Sider } = Layout;
  return (
    <Sider 
        trigger={null} 
        collapsible 
        className="sidebar"
      >
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img-collapsed" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          className="menu"
        />
      </Sider>
  )
}
export default Aside;