import React from 'react';
import './index.css';
import { Button, Form, Input, message } from 'antd';
import { LoginInfo } from '@/types/user';
import { login } from '@/api/user';
import { useNavigate, Navigate } from 'react-router-dom';
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
    // 已有token就直接跳转
  if(localStorage.getItem('token')){
    messageApi.warning("没有token")
    return <Navigate to="/home" replace/>;
  }
  const handleSubmit = (values: any) => {

    if(!values.username || !values.password){
      messageApi.warning('请输入用户名和密码');
      return ;
    }
    login(values).then(res=>{
      console.log(res);
      localStorage.setItem('token', res.data.token);
      navigate("/home");
    });
  }
  return (
    <> 

    {contextHolder}
    <Form<LoginInfo>
      className='login-container'
      onFinish={handleSubmit}
    >
      <div className='login_title'>系统登录</div>
      <Form.Item
        label="账号"
        name='username'
      >
        <Input placeholder="请输入账号"></Input>
      </Form.Item>
      <Form.Item
        label="密码"
        name='password'
      >
        <Input.Password placeholder="请输入密码"></Input.Password>
      </Form.Item>
      <Form.Item className='login-button'>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
    </>
  )
}
export default Login;
