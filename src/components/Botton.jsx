import React from 'react';

const Botton = ({ name }) => {
  return (
    <button className="px-2 py-1 m-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
      {name}
    </button>
  );
};

export default Botton;
