import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/tasks' >All Tasks</NavLink>
      <NavLink to='/create'>Create</NavLink>

    </nav>
  );
}

export default Navbar;