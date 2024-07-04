import React from 'react';
import { FcGoogle } from "react-icons/fc";
import signinimg from "../assets/images/signinimg.png"
import logo from "../assets/svg/logo.svg"
import icon1 from "../assets/svg/signinicon1.svg"
import icon2 from "../assets/svg/signinicon2.svg"
import icon3 from "../assets/svg/signinicon3.svg"
import icon4 from "../assets/svg/signinicon4.svg"
import bgimg from "../assets/svg/signinbg.svg" 
import { Link } from 'react-router-dom';
const Signup = () => {
  return (

    <div className="flex min-h-screen xs:grid md:grid sm:grid  lg:flex  lg:w-full">
      {/* Left section */}
      <div className="flex-1 lg:bg-cover lg:bg-center lg:relative"
       style={{
        backgroundImage: `url(${signinimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='pl-[32px] pt-[3%]'>
            <img src={logo} alt="Logo" className="mb-8" />
          </div>
          <div className="mb-8 pl-[70px] xs:pl-4 pt-[23%]">
            <button className="mb-4 bg-[#008CD2] text-white py-1 rounded-full flex items-center px-[7%]">
              <span className=" ml-[-9%] pr-[8%]"><img src={icon1} alt="" /></span> Speech to Text
            </button>
          
          </div>
        <div className="flex pt-[1%] pl-[50px] xs:pl-4 p-8">
          <div className=" bg-opacity-70  backdrop-blur-xl p-4 w-1/2 xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/4 rounded-xl">
          <p><img src={icon2} alt="" /></p>
            <p className="text-lg text-white font-bold mb-2"> Best Speech to Text and <br /> Recording to Text across <br /> the internet.</p>
          </div>
        </div>
      
        <div className='flex lg:justify-center xs:mr-0 sm:mr-0 sm:justify-center sm:pb-[3%] xs:justify-center xs:pb-[3%] '>
       
        <button className="bg-[#FF9A26] text-white py-1 px-8 rounded-full flex items-center xs:mt-0 xs:ml-0   lg:mt-[4%]">
              <span className="lg:mr-[5%] lg:ml-[-12%] xs:ml-0 xs:mr-0 sm:mr-0 sx:ml-0  "><img src={icon4} alt="" /></span> Voice Recording
            </button>
        </div>
      
      </div>
     
      {/* Right section */}
      <div className="flex-1 flex items-center justify-center flex-col bg-white">
        <p className='xs:mt-[3%] xs:pl-[35%] xs:pr-[2%] sm:mt-[3%] sm:pl-[35%] sm:pr-[2%]  '>Don’t have an account?<span className='text-[#008CD2] ' style={{borderBottom:"1px solid #008CD2 "}}>Sign in!</span></p>
        <div className="w-full max-w-md p-8 bg-white rounded-lg ] ">
          <h2 className="text-[23px] font-semibold inter_ff mb-2 text-center text-nowrap">Get Started With EchoWrite</h2>
          <p className=" mb-6 text-center text-[11px] font-normal text-[#7E7E7E]">Getting started is easy</p>
          <form>
            <div className="mb-4">
           
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
             
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
         
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
             
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-[#008CD2] text-white font-normal py-2 px-4 text-[15px] inter_ff  rounded-full w-full"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div className="text-center mb-4">
             <p ><img className='h-[34px]' src={icon3} alt="" /></p>
            </div>
            <div className="flex justify-center">
              <button className="bg-white  border text-[10px]  font-medium inter_ff py-2 px-4 rounded-full flex items-center">
                <FcGoogle className="mr-2 h-[16px] w-[16px]" /> Continue with Google
              </button>
            </div>
          </form>
          <p className="text-start text-[#5A5A5A] text-[12px] font-light inter_ff lg:text-nowrap md:text-nowrap sm:text-wrap xs:text-wrap mt-4">
          By continuing you indicate that you read and agreed to the <Link className="text-[#008CD2] text-[12px] font-light inter_ff" 
          style={{borderBottom:"1px solid #008CD2"}}
          >Terms of Use</Link>
          </p>
        </div>
        <img className=' lg:absolute lg:flex lg:ml-[-49%] lg:mt-[24%] xl:mt-[19%] xs:hidden sm:hidden md:hidden  ' src={bgimg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
