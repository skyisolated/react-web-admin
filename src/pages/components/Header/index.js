import React from 'react'

const Header = () => {
  return (
      <Header
        style={{ 
          padding: 0, 
          background: '#001529' 
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
  )
}
export default Header;
