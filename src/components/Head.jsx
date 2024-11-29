import React from 'react';
import { HAMBURGEN_ICON, USER_ICON, YOUTUBE_ICON } from '../utils/ImageIcons';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';

const Head = () => {
    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col items-center p-4 m-2 shadow-sm bg-white fixed top-0 left-0 w-full z-30'>
      <div className='flex items-center col-span-2'>
        <img 
        onClick={()=> toggleMenuHandler()} 
        className='h-8 mr-4 cursor-pointer' src={HAMBURGEN_ICON} alt="Hamburger Icon" />
        <img className='h-9' src={YOUTUBE_ICON} alt="YouTube Icon" />
      </div>
      <div className='col-span-8 flex items-center w-full'>
        <input
          className="w-3/4 p-2 border border-gray-300 rounded-l-full focus:outline-none "
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-r-full hover:bg-gray-300">
          <MagnifyingGlassIcon className="h-6 w-5 text-gray-600" />
        </button>
      </div>
      <div className='col-span-2 flex justify-end'>
        <img className='h-8 cursor-pointer' src={USER_ICON} alt="User Icons" />
      </div>
    </div>
  );
};

export default Head;
