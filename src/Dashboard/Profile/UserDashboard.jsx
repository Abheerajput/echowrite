// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import bgimg from "../../assets/images/Frame.jpg";
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import icon from "../../assets/svg/profileheadicon.svg"
import user from "../../assets/svg/userprofileicon.svg"
import share from "../../assets/svg/shareicon.svg"
const Dashboard = () => {
  return (
    <>
   
    <div className='min-h-screen flex flex-col' style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
    }}>
      <Navbar />

      <div className='mx-12  mt-12 mb-12  rounded-xl shadow-lg   bg-white'>
        <div className="flex flex-col  relative">
          <p className='absolute'><img src={icon} alt="" className='bg-[#008CD2] w-screen ' /></p>
          <div className='flex relative  mt-[6%] pl-20'>
            <p>
              <img src={user} alt="" className=' ' /></p>
            <div className='flex w-full justify-between mt-8 items-center px-8'>
              <p>
              <p className='text-[21px] font-bold inter_ff text-[#083A50]'>Mobina Mirbagheri</p>
              <p className='text-[17px] font-bold text-[#808080] inter_ff'>Your account is ready, you can now apply for advice.</p>
              </p>
              <p><img src={share} alt="" /></p>
              </div>

          </div>
          <div className='flex mb-4  '>
            <div className='flex'>
              <Sidebar />
            </div>

            <div className="p-5 m w-full">
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

export default Dashboard;
