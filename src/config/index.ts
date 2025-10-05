export interface MenuItemConfig {
  path: string;
  name?: string;
  label: string;
  icon?: string;
  url?: string;
  children?: MenuItemConfig[];
}

const menuConfig: MenuItemConfig[] = [
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'HomeOutlined',
    url: '/home/index'
  },
  {
    path: '/mall',
    name: 'mall',
    label: '商品管理',
    icon: 'ShopOutlined',
    url: '/mall/index'
  },
  {
    path: '/user',
    name: 'user',
    label: '用户管理',
    icon: 'UserOutlined',
    url: '/user/index'
  },
  {
    path: '/others',
    label: '其他',
    icon: 'SettingOutlined',
    children: [
      {
        path: '/others/pageOne',
        name: 'page1',
        label: '页面1',
        icon: 'SettingOutlined'
      },
      {
        path: '/others/pageTwo',
        name: 'page2',
        label: '页面2',
        icon: 'SettingOutlined',
        children: [
          {
            path: '/others/pageTwo/pageThree',
            name: 'page3',
            label: '页面3',
            icon: 'SettingOutlined'
          }
        ]
      }
    ]
  }
];

export default menuConfig;