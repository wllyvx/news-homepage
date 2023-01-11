"use client"
import React, {useState} from 'react'

const menuItems = (title:string)=>{
  return (
    <a href="#"><li className='text-very-dark-blue hover:text-soft-red'>{title}</li></a>
  )
}

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center pt-7 pb-8 md:pb-14 md:pt-[5.5rem] mx-auto">
      <img src="./images/logo.svg" alt="" className="w-[45px] md:w-[65px]" />
      <ul className="md:flex justify-end items-center space-x-10 hidden text-dark-grayish-blue">
        {menuItems("Home")}
        {menuItems("New")}
        {menuItems("Popular")}
        {menuItems("Trending")}
        {menuItems("Categories")}
      </ul>
      <button onClick={() => setShowMenu (!showMenu)} className="block md:hidden">
        <img src="./images/icon-menu.svg" alt="menu" />
      </button>

      {/* mobile menu start */}
      <div
        className={`py-7 px-5 ${
          showMenu ? 'fixed inset-0 left-[32%] sm:left-[40%] bg-off-white h-[100vh] md:hidden' : 'hidden'
        }`}
      >
        <div className='w-full flex justify-end'>
          <button onClick={()=> setShowMenu (!showMenu)}><img src="./images/icon-menu-close.svg" alt="" /></button>
        </div>
        <ul className='flex flex-col gap-4 py-24 text-lg'>
          {menuItems("Home")}
          {menuItems("New")}
          {menuItems("Popular")}
          {menuItems("Trending")}
          {menuItems("Categories")}
        </ul>
      </div>
      {/* mobile menu end */}
    </nav>
  );
}
