import React, { useEffect, useState } from 'react'
import './index.css'
import {getData} from "@/api/home";
import { Row, Col, Card, Table } from 'antd'
import avatar from "@/assets/avatar.png";
import { Phone } from '@/types/home';
import { icon2Element } from '@/utils/common';
import Echarts from "@/pages/components/Echarts";
const columns = [
  {
    title: '手机名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '今日采购',
    dataIndex: 'todayPurchase',
    key: 'todayPurchase',
  },
  {
    title: '本月采购',
    dataIndex: 'monthlyPurchase',
    key: 'monthlyPurchase',
  },
  {
    title: '总采购',
    dataIndex: 'totalPurchase',
    key: 'totalPurchase',
  },
];
const orderInfo = [
  {
    "name": "今日支付订单",
    "value": 1234,
    "icon": "CheckCircleOutlined",
    "color": "#2ec7c9"
  },
  {
    "name": "今日收藏订单",
    "value": 3421,
    "icon": "ClockCircleOutlined",
    "color": "#ffb980"
  },
  {
    "name": "今日末支付订单",
    "value": 1234,
    "icon": "CloseCircleOutlined",
    "color": "#5ab1ef"
  },
  {
    "name": "本月支付订单",
    "value": 1234,
    "icon": "CheckCircleOutlined",
    "color": "#2ec7c9"
  },
  {
    "name": "本月收藏订单",
    "value": 3421,
    "icon": "ClockCircleOutlined",
    "color": " #ffb980"
  },
  {
    "name": "本月未支付订单",
    "value": 1234,
    "icon": "CloseCircleOutlined",
    "color": "#5ab1ef"
  }
];
const Home = () => {
  // 钩子函数，在初次加载以及[]中配置的属性变化时加载。类似于vue的onMounted()
  useEffect(()=>{
     getData().then(res=>{
        const {phones} = res.data;
        setPhones(phones);
     });
  }, []);
  const [phones, setPhones] = useState<Phone[]>([]);
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
        <Card
          hoverable
          style={{marginTop: '20px'}}
        > 
        <Table<Phone> columns={columns} dataSource={phones} rowKey={record=>record.name} pagination={false} />
        </Card>
      </Col>  
      <Col span={16}>
        <div className='order-info'>
          {
            orderInfo.map((item, index)=>(
            
              <Card
                key={index}    
              >
                <div className='order-info-icon' style={{backgroundColor: item.color}}>
                  {icon2Element(item.icon)}
                </div>
                <div className='order-info-content'>
                  <p className='count'>￥{item.value}</p>
                  <p className='detail'>{item.name}</p>
                </div>
              </Card>
            ))
          }
        </div>
        <Echarts />
      </Col>
    </Row>
  )
}

export default Home