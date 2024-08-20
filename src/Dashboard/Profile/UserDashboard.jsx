// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Sidebar from './Sidebar';
import bgimg from "../../assets/images/Frame.jpg";
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import icon from "../../assets/svg/profileheadicon.svg";
import user from "../../assets/svg/userprofileicon.svg";
import share from "../../assets/svg/shareicon.svg";
import { BASE_URL } from "../../../src/config";
const UserDashboard = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user-name`);
        setUserName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserName();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
      }}>
        <Navbar />

        <div className="mx-4 sm:mx-8 md:mx-12 mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12 rounded-xl shadow-lg bg-white">
          <div className="flex flex-col relative">
            <p className="absolute w-full">
              <img src={icon} alt="" className="bg-[#008CD2] w-full" />
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row xs:flex-row sm:flex-row relative mt-16 sm:mt-[6%] pl-5 sm:pl-10 md:pl-20">
              <p>
                <img src={user} alt="" className="" />
              </p>
              <div className="flex flex-col sm:flex-col w-full justify-between lg:flex-row md:flex-row xl:flex-row lg:justify-end md:justify-end xl:justify-end mt-4 sm:mt-8 items-start sm:items-center px-2 sm:px-4 md:px-8">
                <div>
                <p className="text-[17px] sm:text-[21px] font-bold inter_ff text-[#083A50]">{userName}</p>
                <p className="text-[13px] sm:text-[17px] font-bold text-[#808080] inter_ff">
                 {email}
                </p>
                </div>
                
                <p className="mt-4 sm:mt-0">
                  <img src={share} alt="" />
                </p>
              </div>
            </div>
            <div className="xs:flex flex xs:flex-col  sm:flex-row mb-4">
              <div className=" sm:w-1/4">
                <Sidebar />
              </div>
              <div className="p-2 sm:p-5 m-2 sm:m-4 w-full">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;

// // src/components/Dashboard.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import bgimg from "../../assets/images/Frame.jpg";
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Layout/Navbar';
// import Footer from '../Layout/Footer';
// import icon from "../../assets/svg/profileheadicon.svg"
// import user from "../../assets/svg/userprofileicon.svg"
// import share from "../../assets/svg/shareicon.svg"
// const UserDashboard = () => {
//   return (
//     <>
   
//     <div className='min-h-screen flex flex-col' style={{
//       backgroundImage: `url(${bgimg})`,
//       backgroundSize: 'cover',
//     }}>
//       <Navbar />

//       <div className='mx-12  mt-12 mb-12  rounded-xl shadow-lg   bg-white'>
//         <div className="flex flex-col  relative">
//           <p className='absolute'><img src={icon} alt="" className='bg-[#008CD2] w-screen ' /></p>
//           <div className='flex relative  mt-[6%] pl-20'>
//             <p>
//               <img src={user} alt="" className=' ' /></p>
//             <div className='flex w-full justify-between mt-8 items-center px-8'>
//               <p>
//               <p className='text-[21px] font-bold inter_ff text-[#083A50]'>Mobina Mirbagheri</p>
//               <p className='text-[17px] font-bold text-[#808080] inter_ff'>Your account is ready, you can now apply for advice.</p>
//               </p>
//               <p><img src={share} alt="" /></p>
//               </div>

//           </div>
//           <div className='flex mb-4  '>
//             <div className='flex'>
//               <Sidebar />
//             </div>

//             <div className="p-5 m w-full">
//               <Outlet />
//             </div>
//           </div>

        
//         </div>
//       </div>
//     </div>
//       <Footer />
//       </>
//   );
// };

// export default UserDashboard;
