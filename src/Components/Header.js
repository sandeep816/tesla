import React from 'react';

export default function Header() {
  return <>
    <header className="body-font fixed w-full">
  <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src='images/logo.svg' />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Model S</a>
      <a className="mr-5 hover:text-gray-900">Model 3</a>
      <a className="mr-5 hover:text-gray-900">Model X</a>
      <a className="mr-5 hover:text-gray-900">Model Y</a>
      <a className="mr-5 hover:text-gray-900">Solar Roof</a>
      <a className="mr-5 hover:text-gray-900">Solar Panels</a>
    </nav>
   

<ul className='flex'>
<li className="mr-5"><a href=''>Shop</a></li>
<li className="mr-5"><a href=''>Account</a></li>
<li className="mr-5"><a href=''>Menu</a></li>
</ul>    
  </div>
</header>
  </>;
}
