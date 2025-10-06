import React from 'react'
import './index.css'
import { Row, Col, Card } from 'antd'
import avatar from "@/assets/avatar.png";
const Home = () => {
  return (
    <Row className='home'>
      <Col span={8}>
        <Card
          hoverable
        >
          <div className='user'>
            <img src={avatar} className='img'></img>
            <div className='userinfo'>
              <p className='name'>Admin</p>
              <p className='desc'>超级管理员</p>
            </div>
          </div>
          <div className='login-info'>
            <p>上次登录时间: <span>2025-10-06</span></p>
            <p>上次登录地点: <span>上海</span></p>
          </div>
        </Card>
      </Col>  
      <Col span={16}>
      </Col>
    </Row>
  )
}

export default Home