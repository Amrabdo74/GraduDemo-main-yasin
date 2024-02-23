import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <div className="d-flex app">
      <div className="content" width="calc(100% - 250px)">
        <div className="container-fluid">
          <Header />
          <Outlet />
        </div>
      </div>
      <div className="side">
        <Aside/>
      </div>
    </div>
  )
}

export default RootLayout