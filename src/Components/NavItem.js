import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({ path, label }) => {
    return <NavLink className='mr-5 hover:text-gray-900'  to={path}>
        {label}
    </NavLink>
};

export default NavItem;