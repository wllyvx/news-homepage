import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = (title:string)=>{
  return (
    <li>{title}</li>
  )
}

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-7 pb-8 md:pt-[5.5rem] mx-auto">
      <img src="./images/logo.svg" alt="" className='w-[45px] md:w-full' />
      <ul className='md:flex justify-end items-center space-x-10 hidden'>
        {menuItems("Home")}
        {menuItems("New")}
        {menuItems("Popular")}
        {menuItems("Trending")}
        {menuItems("Categories")}
      </ul>

      <Link href="./mobilemenu" className='inline md:hidden'>
        <Image src="./images/icon-menu.svg" width={40} height={40} alt="menu" />
      </Link>
    </nav>
  );
}
