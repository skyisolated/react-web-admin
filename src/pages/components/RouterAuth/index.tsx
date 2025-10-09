import React from 'react'
import { Navigate } from 'react-router-dom';
// react中没有路由守卫，因此用组件实现
export const RouterAuth: React.FC<{ children: React.ReactNode }> = ({children})=> {
  const token = localStorage.getItem('token');
  if(!token) {
    return <Navigate to="/login" replace/>;
  }else{
    return (
      children
    )
  }
}
