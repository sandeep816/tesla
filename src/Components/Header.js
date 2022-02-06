import React, {useState} from 'react'
import NavItem from "./NavItem";
import {Outlet} from "react-router-dom";

export default function Header() {

  const [menuStatus, setMenuStatus] = useState(false);

  return <>
    <header className="body-font fixed w-full">
      <div className="mx-auto flex flex-wrap p-5   md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src='images/logo.svg' alt='logo name' />
        </div>
      
      <nav className="lg:ml-auto lg:mr-auto lg:block hidden  flex flex-wrap items-center text-base justify-center">
        {/* <NavItem path='/' label="Home" /> */}
        <NavItem path='/models' label="Models" />
        <NavItem path='/model3' label="Model3" />
        <NavItem path='/models' label="Models" />
        <NavItem path='/modelx' label="Modelx" />
      </nav>

        <ul className='flex ml-auto lg:m-0'>
          <li className="mr-5 lg:block hidden"><NavItem path='/shop' label="Shop" /></li>
          <li className="mr-5 lg:block hidden"><NavItem path='/account' label="Account" /></li>
          <li className="mr-0 lg:mr-5 cursor-pointer"><span onClick = {() => setMenuStatus(true)}>Menu</span></li>
        </ul>  
        
        <div className={menuStatus ? 'min-h-screen fixed top-0 -right-0 bg-white w-[300px] px-10 py-10 ease-in-out duration-300 ' : 'ease-in-out duration-300 min-h-screen fixed top-0 -right-[300px] bg-white w-[300px] px-10 py-10'} open = {menuStatus}>
          <span onClick = {() => setMenuStatus(false)} className='flex justify-end cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
          </span>
          <ul>
          <li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
				<li><a href="">Existing Inventory</a></li>
				<li><a href="">Used Inventory</a></li>
				<li><a href="">Trade In</a></li>
				<li><a href="">Test Drive</a></li>
				<li><a href="">Powerwall</a></li>
				<li><a href="">Commercial Energy</a></li>
          </ul>
          </div>  
      </div>
    </header>
<Outlet />
  </>;
}
