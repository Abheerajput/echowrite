import React from 'react';
import { FcGoogle } from "react-icons/fc";
import signinimg from "../assets/images/signinimg.png";
import logo from "../assets/svg/logo.svg";
import icon1 from "../assets/svg/signinicon1.svg";
import icon2 from "../assets/svg/signinicon2.svg";
import icon3 from "../assets/svg/signinicon3.svg";
import icon4 from "../assets/svg/signinicon4.svg";
import bgimg from "../assets/svg/signinbg.svg";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left section */}
      <div className="flex-1 hidden lg:flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${signinimg})`,
        }}>
        <div className='pl-[32px] pt-[3%]'>
          <img src={logo} alt="Logo" className="mb-8" />
        </div>
        <div className="mb-8 pl-[70px]">
          <button className="mb-4 bg-[#008CD2] text-white py-1 rounded-full flex items-center px-[7%]">
            <span className=" ml-[-9%] pr-[8%]"><img src={icon1} alt="" /></span> Speech to Text
          </button>
        </div>
        <div className="flex pt-[1%] pl-[50px] p-8 xs:p-0">
          <div className=" bg-opacity-70 backdrop-blur-xl p-4 w-1/2 rounded-xl">
            <p><img src={icon2} alt="" /></p>
            <p className="text-lg text-white font-bold mb-2"> Best Speech to Text and <br /> Recording to Text across <br /> the internet.</p>
          </div>
        </div>
        <div className='flex justify-center pb-[3%]'>
          <button className="bg-[#FF9A26] text-white py-1 px-8 rounded-full flex items-center lg:mt-[4%]">
            <span className="lg:mr-[5%] lg:ml-[-12%]"><img src={icon4} alt="" /></span> Voice Recording
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex flex-col items-center  xs:items-center xs:justify-start justify-center bg-white p-8">
        <p className='mt-4 mb-4 text-sm'>Don’t have an account? <span className='text-[#008CD2]' style={{ borderBottom: "1px solid #008CD2" }}>Sign in!</span></p>
        <div className="w-full max-w-md p-8 bg-white rounded-lg">
          <h2 className="text-[23px] font-semibold inter_ff text-black mb-2 text-center">Get Started With EchoWrite</h2>
          <p className="mb-6 text-center text-[11px] font-normal text-[#7E7E7E]">Getting started is easy</p>
          <form className='w-full'>
            <div className="mb-4">
              <input className="border rounded-lg w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Full Name" required />
            </div>
            <div className="mb-4">
              <input className="border rounded-lg w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
              <input className="border rounded-lg w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="Password" required />
            </div>
            <div className="mb-4">
              <input className="border rounded-lg w-full py-2 px-3 text-gray-700" id="confirm-password" type="password" placeholder="Confirm Password" required />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button className="bg-[#008CD2] text-white font-normal py-2 px-4 text-[15px] inter_ff rounded-full w-full" type="submit">Create Account</button>
            </div>
            <div className="text-center mb-4">
              <p><img className='h-[34px]' src={icon3} alt="" /></p>
            </div>
            <div className="flex justify-center">
              <button className="bg-white border text-[10px] font-medium inter_ff py-2 px-4 rounded-full flex items-center">
                <FcGoogle className="mr-2 h-[16px] w-[16px]" /> Continue with Google
              </button>
            </div>
          </form>
          <p className="text-start text-[#5A5A5A] text-[12px] font-light inter_ff lg:text-nowrap mt-4">
            By continuing you indicate that you read and agreed to the <Link className="text-[#008CD2] text-[12px] font-light inter_ff" style={{ borderBottom: "1px solid #008CD2" }}>Terms of Use</Link>
          </p>
        </div>
        <img className='lg:absolute  lg:ml-[-49%] lg:hidden lg:mt-[24%] xl:mt-[19%] xs:hidden sm:hidden md:hidden' src={bgimg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
;
