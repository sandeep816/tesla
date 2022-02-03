import React from 'react';
import NavItem from "./NavItem";
import {Outlet} from "react-router-dom";


export default function Header() {
  return <>
    <header className="body-font fixed w-full">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src='images/logo.svg' />
        </a>
      
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <NavItem path='/' label="Home" />
        <NavItem path='/models' label="Models" />
        <NavItem path='/model3' label="Model3" />
        <NavItem path='/models' label="Models" />
        <NavItem path='/modelx' label="Modelx" />
      </nav>

        <ul className='flex'>
          <li className="mr-5"><a href=''>Shop</a></li>
          <li className="mr-5"><a href=''>Account</a></li>
          <li className="mr-5"><a href=''>Menu</a></li>
        </ul>    
      </div>
    </header>
<Outlet />
  </>;
}
