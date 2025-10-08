import React from 'react';
import './App.css';
import Main from './pages/main';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import "@/mock/home";
import "@/mock/user";
// 解决antd v5与react19版本冲突
import '@ant-design/v5-patch-for-react-19';
function App() {
  return (
    <div className="app">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;