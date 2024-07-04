import React, { useState } from 'react';
import bgimg from "../assets/svg/Dashboardbgimg.svg";
import logo from "../assets/svg/logo.svg";
import mike from "../assets/svg/mikeicon.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import pauseicon from "../assets/svg/pauseicon.svg"
import { Link } from 'react-router-dom';

const Dashboard4 = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Process the files here (e.g., upload, convert)
    console.log('Uploaded files:', files);
  };

  const handleConvert = (format) => {
    // Simulate conversion process (replace with actual logic)
    setRemainingMinutes(0);
    console.log('Converting to format:', format);
    // ... other actions
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
    <div className="mx-auto mt-16 px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='py-4 flex justify-between items-center'>
          <p><img src={logo} alt="Logo" /></p>
          <div className='flex items-center gap-4'>
            <div className='flex xs:pt-4 md:hidden lg:hidden'>
              <button onClick={toggleMenu} className='text-gray-600 focus:outline-none'>
                {menuOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
              </button>
            </div>
            <div className={`lg:flex md:flex items-center ${menuOpen ? 'flex' : 'hidden'} lg:block`}>
              <p className='text-16 font-normal inter_ff lg:ml-4'><Link to="/dashboard5">Next</Link></p>
              <p className='text-16 font-normal inter_ff lg:ml-4'>Support</p>
              <p className='flex border rounded-2xl font-bold px-2 xs:text-[14px] items-center lg:ml-4'>
                <span className='w-8 h-8 xs:w-4 xs:h-4 bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-14 xs:text-[10px] inter_ff mr-2'>J</span> John Doe
              </p>
            </div>
          </div>
        </div>
      <div className="bg-white rounded-lg shadow-md pb-4 px-12 xs:px-2">
        <div className='flex justify-between md:flex md:flex-col md:justify-around sm:flex sm:flex-col sm:justify-around xs:flex xs:flex-col xs:justify-around lg:flex'>
          <span className='mt-5'>
            <h2 className="text-[30px] text-black font-bold inter_fff">Speech to Text</h2>
            <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px]">Quickly transcribe your audio to text.</p>
          </span>
          <div className="mt-6 mb-4">
            <p className="text-[15px] text-[#808080] font-normal inter_f">Available conversion minute(s):</p>
            <div className="bg-gray-200 rounded-full h-1 mt-2 overflow-hidden">
              <div className="bg-[#EBEEF5] rounded-full" style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
            </div>
            <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
          </div>
        </div>
        <div
          className="border-2 border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:justify-around cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <div className='flex flex-col w-full xs:flex xs:flex-col xs:justify-around'>
            <div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
              <div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:justify-around xs:w-11/12 xs:mb-2'>
                <p className='flex justify-center'>
                  <img className='w-24 h-24' src={mike} alt="Microphone" />
                </p>
                <p className='text-[18px] inter_ff text-black font-bold text-center'>Start Speaking We’ll Convert <br /> your Voice to Text</p>
                <p className='text-[18px] font-bold'>00:55 mins</p>
                <p className='text-[#808080] text-nowrap'>Support Multiple Language.</p>
                <p className='pt-[2%] flex justify-center gap-2'>
                  <img src={pauseicon} alt="" />
                  <button className='text-white px-6 py-1 rounded-2xl' style={{ backgroundColor: "#D93F21" }}>
                    Stop
                  </button>
                </p>
              </div>
              <div className='w-3/5 border-l border-gray-300 xs:w-full xs:border-2'>
              <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>
                <div className="relative px-4 pb-4">
                  <textarea
                    className="border border-gray-300 rounded-md px-5 py-2 w-full h-48 resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
                    placeholder='Text Visible Here'
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex mt-4 pt-3 justify-between border-t-2 items-center xs:flex xs:flex-col-reverse xs:justify-around">
              <div className="flex gap-4 ml-5">
                <div className="mb-4">
                <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
                  <select
                    id="language"
                    className="border border-gray-300 rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  >
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-[#808080] text-15 font-normal mb-2" htmlFor="format">Output Format</label>
                  <select
                    id="format"
                    className="border border-gray-300 rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  >
                    <option value="text">Text</option>
                    {/* Add more output format options */}
                  </select>
                </div>
              </div>
              <div className='relative mr-6'>
                <button
                   className="bg-[#E4E4E4] text-[#808080] font-medium  text-[15px] inter_ff py-2 px-4 rounded-2xl"
                  onClick={toggleDropdown}
                  disabled={remainingMinutes === 0}
                >
                  Download as a Document
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleConvert('pdf')}
                      >
                        PDF
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleConvert('docx')}
                      >
                        DOCX
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleConvert('txt')}
                      >
                        TXT
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard4;


