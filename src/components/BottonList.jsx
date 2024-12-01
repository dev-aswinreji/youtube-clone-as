import React from 'react';
import Botton from './Botton';

const BottonList = () => {
  const buttons = [
    'All', 'Music', 'Sports', 'Gaming', 'News', 'Movies', 'Fashion', 'Live',
    'Tech', 'Education', 'Health', 'Fitness', 'Travel', 'Cooking','Fitness',
  ];

  return (
    <div className="flex flex-wrap justify-start items-start p-6">
      {buttons.map((name, index) => (
        <Botton key={index} name={name} />
      ))}
    </div>
  );
};

export default BottonList;
