import React from 'react';
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/jicon.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex pt-4 justify-between h-15 px-4 sm:px-8 lg:px-12 items-center'>
      <p> 
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>

        </p>
      <ul className='flex gap-4 sm:gap-8 items-center'>
        <li className='text-[14px] sm:text-[16px] inter_ff font-normal'>FAQ</li>
        <li className='text-[14px] sm:text-[16px] inter_ff font-normal'>Support</li>
        <li>
          <button className='flex gap-2 sm:gap-3 border rounded-3xl text-[12px] sm:text-[14px] inter_ff font-bold items-center py-1 px-2 sm:pr-3'>
            <span><img src={icon} alt="User Icon" className="w-6 sm:w-8" /></span> John Doe
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
