import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './components/Aside';

const Main: React.FC = () => {
  return (
    <div className="layout-container">
      <Aside></Aside>
      <div className="main-content">
        <div className="header"></div>
        <div className="content-wrapper">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;