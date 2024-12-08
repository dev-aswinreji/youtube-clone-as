import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex">
      <SideBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
