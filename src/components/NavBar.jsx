import React,{useState, useEffect} from 'react'

const NavBar = () => {
    
  return (
    <div className="bg-green-300 ">
        <div className="container mx-auto flex-wrap block  flex-col justify-center p-4 ">
     <a href="#" className="flex-col title-font font-medium items-center text-gray-900 mb-4 p-4">
       {/* <img src={locofy} /> */}LOGO
     </a>
     <div className=" inline-block flex-wrap ml-44 items-center center text-base p-4 font-bold">
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">मुख्यपृष्ठ</a>
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">आमच्याबद्दल</a>
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">आमची टीम</a>
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">सेवा</a>
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">दाखला</a>
       <a href="#" className="mr-5 hover:bg-blue-200 p-2">संपर्क</a>
     </div>
     <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 float-right">Donate</button>
</div>
      
    </div>
  )
}

export default NavBar

