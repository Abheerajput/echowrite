import React, { useState,useEffect } from 'react';
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/jicon.svg";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const[username,setUsername] = useState("")
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name)
    if (user) {
     setUsername(user.name);
    }
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside (optional)
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown-btn')) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
    navigate('/login')
  }
  // Add event listener to detect outside click (optional)
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
        <li className='relative'>
          <button
            className='dropdown-btn flex gap-2 sm:gap-3 border rounded-3xl text-[12px] sm:text-[14px] inter_ff font-bold items-center py-1 px-2 sm:pr-3'
            onClick={toggleDropdown}
          >
            <span><img src={icon} alt="User Icon" className="w-6 sm:w-8" /></span>{username}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className='absolute top-full right-0 mt-2 w-48 bg-white border  rounded-lg shadow-md z-10'>
              <ul className='py-2 flex flex-col items-center'>
                <li className='px-4 py-2  cursor-pointer'><Link to="/user">Profile</Link>  </li>
                <li className='px-4 py-2  cursor-pointer'>Settings</li>
                <button onClick={handleLogout} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Logout
    </button>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

