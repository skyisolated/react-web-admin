import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "@/store";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /**
   * StrictMode作用是帮助在开发过程中尽早发现组件中的常见错误
   * 它会将组件重新渲染一次，因此有时你会发现有些请求内的console.log()打印了两次
   */
  <React.StrictMode>
    {/* 挂载store，让全局都能访问到store中的变量 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();