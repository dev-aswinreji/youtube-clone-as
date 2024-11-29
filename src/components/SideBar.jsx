import React from "react";
import { useSelector } from "react-redux";
import { HAMBURGEN_ICON, YOUTUBE_ICON } from "../utils/ImageIcons"; 

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenu); 

  if (!isMenuOpen) return null; 

  return (
    <div className="w-60 h-screen flex flex-col bg-gray-100 shadow-md fixed top-0 left-0 z-20">
      {/* Sidebar Header */}
      <div className="p-4 bg-white flex items-center sticky top-0 z-30">
        {/* Hamburger Icon */}
        <img
          className="h-8 mr-4 cursor-pointer"
          src={HAMBURGEN_ICON}
          alt="Hamburger Icon"
        />
        {/* YouTube Icon */}
        <img className="h-9" src={YOUTUBE_ICON} alt="YouTube Icon" />
      </div>

      {/* Scrollable Content Section */}
      <div className="flex-1 overflow-y-auto p-4">
       
        <ul className="mb-4 space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Menu</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Shorts</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Subscription</li>
        </ul>

        <hr className="border-gray-300 my-2" />

        <ul className="mb-4 space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">You</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">History</li>
        </ul>
        <hr className="border-gray-300 my-2" />

        
        <ul className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Explore</h2>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Trending</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Shopping</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Music</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Movies</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Games</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Live</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">News</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Sports</li>
        </ul>
        <hr className="border-gray-300 my-2" />

  
        <ul className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">More for YouTube</h2>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">YouTube Premium</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">YouTube Music</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">YouTube Kids</li>
        </ul>
        <hr className="border-gray-300 my-2" />
        
     
        <ul className="mb-4 space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Settings</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Report history</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Help</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Send feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
