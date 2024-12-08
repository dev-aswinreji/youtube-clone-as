import React, { useEffect, useState } from 'react';
import { HAMBURGEN_ICON, USER_ICON, YOUTUBE_ICON } from '../utils/ImageIcons';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { YOUTUBE_SEARCH_API } from '../utils/ApiContants';

const Head = () => {
  
  const [searchQuery,setSearchQuery]=useState("")
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggetion(),200)
    return()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  const getSearchSuggetion = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1]);
    setShowSuggestions(true);
  }

    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col items-center p-3 shadow-sm bg-white fixed top-0 left-0 w-full z-30'>
      <div className='flex items-center col-span-2'>
        <img 
        onClick={()=> toggleMenuHandler()} 
        className='h-8 mr-4 cursor-pointer' src={HAMBURGEN_ICON} alt="Hamburger Icon" />
        <a href="/"><img   className='h-9' src={YOUTUBE_ICON} alt="YouTube Icon" /></a>
      </div>
      <div className='col-span-8 flex items-center relative'>
        <input
          className='w-3/4 p-2 border border-gray-300 rounded-l-full focus:outline-none'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder='Search'
        />
        <button className='px-4 py-2 bg-gray-200 border border-gray-300 rounded-r-full hover:bg-gray-300'>
          <MagnifyingGlassIcon className='h-6 w-5 text-gray-600' />
        </button>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className='absolute top-12 left-0 w-3/4 bg-white border border-gray-300 shadow-lg rounded-md max-h-64 overflow-y-auto z-50'>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='col-span-2 flex justify-end'>
        <img className='h-8 cursor-pointer' src={USER_ICON} alt="User Icons" />
      </div>
    </div>
  );
};

export default Head;
