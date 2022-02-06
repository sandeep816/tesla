import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({ path, label }) => {
    return <NavLink className='hover:bg-black/[.05] text-gray-900 rounded-2xl py-1  px-5 font-medium'  to={path}>
        {label}
    </NavLink>
};

export default NavItem;