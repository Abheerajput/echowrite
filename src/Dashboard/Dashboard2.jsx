import React, { useState } from 'react';
import bgimg from "../assets/svg/Dashboardbgimg.svg";
import logo from "../assets/svg/logo.svg";
import mike from "../assets/svg/mikeicon.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard2 = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Process the files here (e.g., upload, convert)
    console.log('Uploaded files:', files);
  };

  const handleConvert = () => {
    // Simulate conversion process (replace with actual logic)
    setRemainingMinutes(0);
    // ... other actions
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className=" mx-auto mt-16 xs:h-screen h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 " style={{
      // backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <nav className="  bg-[#F1F4F5]  top-0 left-0 right-0 ">
<div className=" xs:flex xs:justify-between xs:px-3 px-4 py-6 flex justify-between items-center">
<Link to="/home"> <img src={logo} alt="Logo" className="h-10" />
  </Link>
 
  <div className="flex items-center space-x-6">
  <div className="hidden md:flex space-x-6 items-center">
    <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">FAQ</Link>
      <Link to="/dashboard3" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
      <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
      <div className="flex items-center space-x-2 rounded-3xl border-2 p-1">
        <div className="w-8 h-8 bg-[#008CD2] flex justify-center items-center rounded-full text-white">J</div>
        <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] pr-4 inter_ff">John Doe</span>
      </div>
    </div>
    <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none">
      {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
    </button>
  </div>
</div>
<div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white mb-4 rounded-xl shadow-md`}>
  <div className="flex flex-col items-center py-4 space-y-4">
  <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">FAQ</Link>
    <Link to="/dashboard3" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
    <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
      <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] inter_ff">John Doe</span>
    </div>
  </div>
</div>
</nav>

<div className="bg-white rounded-lg  xs:px-4 shadow-md pb-6  px-12 ">
          <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
            <span className='mt-[20px] lg:mt-0 xs:mt-0' >
              <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Speech to Text</h2>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px] ">Quickly transcribe your audio to text.</p>
            </span>
            <div className="mt-6 mb-4">
              <p className=" text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
              <div className="bg-[#EBEEF5] rounded-full h-[5px]  overflow-hidden" style={{ height: "5px" }}>
                <div
                  className="bg-[#EBEEF5] rounded-full"
                  style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
              </div>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
            </div>
          </div>

        <div
          className="border-2 border-gray-300  rounded-lg  w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around  cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >



<div className='flex flex-col w-full    xs:flex xs:flex-col xs:justify-aroundl'>
<div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
<div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2'>
            <p className='flex justify-center'>
              <img className='w-24 h-24' src={mike} alt="Microphone" />
            </p>
            <p className='text-[18px] inter_ff text-black font-bold text-center'>Start Speaking We’ll Convert <br /> your Voice to Text</p>
            <p className='pt-2'>
              <button className='bg-[#008CD2] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl'>Start Now</button>
            </p>

          </div>

          <div className='w-3/5 border-l border-gray-300  xs:w-full xs:border-2  xs:border-l-0  xs:border-r-0'>
            <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>
            <div className="relative px-4 pb-4">
              <textarea
                className="border border-gray-300 rounded-md px-5 py-2 w-full h-48 resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
                placeholder='Text Visible Here'
              ></textarea>
            </div>
          </div>

</div>


<div className="flex  mt-4 xs:mb-3  justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

              <div className="flex gap-4 ml-[5%] xs:ml-0 pt-2  xs:pt-4">
                <div className="mb-4">
                  <label className="block text-[#808080] text-[15px]   inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
                  <select
                    id="language"
                    className="border border-gray-300  text-[#808080] text-[15px] w-[151px]  xs:w-[100px] inter_ff font-normal rounded-md px-5 py-1  mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}    >
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
                  <select
                    id="format"
                    className="border border-gray-300  text-[#808080] text-[15px] inter_ff font-normal xs:w-[100px]  w-[151px] rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}  >
                    <option value="text">Text</option>
                    {/* Add more output format options */}
                  </select>
                </div>
              </div>
              <p className=' lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
                <button
                  className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
                  onClick={handleConvert}
                  disabled={remainingMinutes === 0}
                  style={{ backgroundColor: "#E4E4E4" }}>
              Download as a Document
                </button>
              </p>
            </div>
        
</div>
        


        </div>


      </div>
    </div>
    </>
  );
};

export default Dashboard2;



