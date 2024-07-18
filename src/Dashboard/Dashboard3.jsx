import React from 'react';
import { FaChevronRight } from "react-icons/fa";

import icon from "../../src/assets/svg/microphone.svg"
import icon2 from "../../src/assets/svg/microphonecolor.svg"
import icon3 from "../../src/assets/svg/vocals.svg"
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Dashboard3 = ({ placeholder }) => {








  const dashboard2Links = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '/dashboard3' },
    { name: 'Support', path: '#' },
  ];


  return (
    <>
      <div className="mx-auto mt-16 xs:h-screen  h-full px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 ">
        <Navbar links={dashboard2Links} />

        <div className="bg-white rounded-lg xs:px-4 shadow-md pb-16 px-12  ">
          <span className='mt-[20px] lg:mt-0 xs:mt-0 w-full'>
            <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000] py-8">Innovating Speech-to-Text Solutions</h2>
          </span>
          <div className='w-full flex xs:flex xs:flex-col xs:gap-4 xs:w-full '>

            <div className='xs:w-full xl:w-3/5 lg:w-3/5 bg-gradient-to-r from-[#408BFA] to-[#778EE5] pt-12 pl-6 rounded-3xl pb-8 '>
              <span className='flex items-center gap-4'>
                <p><img src={icon} alt="" /></p>
                <p className='text-[30px] font-semibold inter_ff text-white'>    EchoWrite</p>
              </span>
              <p className='text-[22px] font-medium inter_ff text-white py-8'>Create Text with Speech or Recording
                <br /> with EchoWrite</p>
              <p className=' bg-white rounded-3xl items-center mt-8' style={{ width: "94%" }}>
                <button className='text-[22px] font-medium inter_ff text-[#161C2D] w-full py-3  '>Start Project Now</button>
              </p>


            </div>
<div className='w-2/5 xs:w-full xs:m-0 flex gap-4 ml-4  xs:pt-8'>


<div className='w-1/2  xs:w-1/2 md:w-1/2 md:ml-3 xs:m-0   rounded-3xl bg-[#EFF9FF] p-4 flex flex-col justify-between ' >

              <span className='flex justify-between  w-full items-center'>
                <p className='text-[18px] font-medium inter_ff '>Speech to Text </p>
              
                <p ><FaChevronRight />  </p>
               
              </span>
              <div className='w-full  xs:pt-12'>
              <Link to="/dashboard">
                <p><img src={icon2} alt="" /></p>
                </Link>
                <p className='text-[20px] font-semibold inter_ff text-[#161C2D] pt-4'>Create Text with Voice  Speech </p>
              </div>
          
            </div>
            <div className='w-1/2 xs:w-1/2 md:w-1/2  xs:m-0  rounded-3xl bg-[#EFF9FF] p-4 flex flex-col justify-between'>
           
              <span className='flex justify-between w-full items-center'>
                <p className='text-[18px] font-medium inter_ff '>Speech to Text </p>
             
                <p ><FaChevronRight />  </p>
                
              </span>
              <div className='w-full xs:pt-12 '>
              <Link to="/dashboard2">
                <p><img src={icon3} alt="" /></p>
                </Link>
                <p className='text-[20px] font-semibold inter_ff text-[#161C2D] pt-4'>Create Text with Recorded Voices  </p>
              </div>
           
            </div>
</div>
            


          </div>
        </div>

      
      </div>

      <div className="flex justify-center xs:mt-48 xs:shadow-none items-center h-28 xs:h-0 space-x-1 py-4 cursor-default bg-white text-gray-600 shadow-sm md:pt-[60px]">
                <p className='text-[15px] font-normal inter_ff text-[#04324D]'>Copyright ©</p>
                <p className='text-[15px] font-normal inter_ff text-[#04324D]'>2024</p>
                <p className="text-[#FF9A26] className='text-[15px] font-normal inter_ff'">EchoWrite.</p>
                <p className='text-[15px] font-normal inter_ff text-[#04324D]'>All rights reserved.</p>
            </div>
    </>
  );
};

export default Dashboard3;
