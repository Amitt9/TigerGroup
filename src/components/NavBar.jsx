import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-300">
      <div className="container mx-auto flex flex-wrap p-4 justify-between items-center">
        <a href="#" className="title-font font-medium text-gray-900 mb-4 md:mb-0">
          {/* <img src={locofy} /> */}
          LOGO
        </a>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-base md:flex-grow md:text-center">
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">मुख्यपृष्ठ</a>
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">आमच्याबद्दल</a>
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">आमची टीम</a>
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">सेवा</a>
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">दाखला</a>
            <a href="#" className="block md:inline-block mr-5 hover:bg-blue-200 p-2">संपर्क</a>
          </div>
          <button className="block md:inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
