import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-60 w-full">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
