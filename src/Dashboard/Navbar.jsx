import React, { useState } from 'react'
import logo from "../assets/svg/logo.svg"
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = ({ links }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (
    <div>
      <nav className="bg-[#F1F4F5] top-0 left-0 right-0">
        <div className="xs:flex xs:justify-between xs:px-3 px-4 py-6 flex justify-between items-center">
          <Link to="/home">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex xl:flex md:flex space-x-6 items-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition"
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative">
                <div
                  className="flex items-center space-x-2 rounded-3xl border-2 p-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
                  <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] pr-4 inter_ff">
                    John Doe
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <Link to="/user">
                    <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </button>
                     
                    </Link>
                    <Link >
                    <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                  </button>
                    
                    </Link>
                    <Link>
                    <button onClick={handleLogout} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Logout
    </button>
               
                    </Link>
                  
                  </div>
                )}
              </div>
            </div>
            <button onClick={toggleMenu} className="md:hidden lg:hidden xl:hidden text-gray-600 focus:outline-none">
              {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden lg:hidden xl:hidden ${menuOpen ? 'block' : 'hidden'} bg-white mb-4 rounded-xl shadow-md`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
                <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] inter_ff">
                  John Doe
                </span>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <Link to="/user">
                   
                    <button className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100"> Profile</button>
                  </Link>
                  <Link >
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                  </button>
                   
                  </Link>

                  <Link>
                      <button onClick={handleLogout} className="block  w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Logout
    </button>
             
                 
                    </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


// import React, { useState } from 'react';
// import logo from "../assets/svg/logo.svg";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div>
//       <nav className="  bg-[#F1F4F5]  top-0 left-0 right-0 ">
// <div className=" xs:flex xs:justify-between xs:px-3 px-4 py-6 flex justify-between items-center">
//   <Link to="/home"> <img src={logo} alt="Logo" className="h-10" />
//   </Link>
 
//   <div className="flex items-center space-x-6">
//     <div className="hidden md:flex space-x-6 items-center">
//     <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">FAQ</Link>
//       <Link to="/dashboard2" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
//       <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
    
//       <div className="flex items-center space-x-2 rounded-3xl border-2 p-1">
//         <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
//         <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] pr-4 inter_fff">John Doe</span>
//       </div>
//     </div>
//     <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none">
//       {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
//     </button>
//   </div>
// </div>
// <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white mb-4 rounded-xl shadow-md`}>
//   <div className="flex flex-col items-center py-4 space-y-4">
//   <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">FAQ</Link>
//     <Link to="/dashboard2" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
//     <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
//     <div className="flex items-center space-x-2">
//       <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
//       <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] inter_ff0">John Doe</span>
//     </div>
//   </div>
// </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar
