import React, { useState } from 'react';
import bgimg from "../assets/svg/Dashboardbgimg.svg"
import logo from "../assets/svg/logo.svg"
import mike from "../assets/svg/mikeicon.svg"
import { Link } from 'react-router-dom';
const Dashboard2 = () => {


  const [remainingMinutes, setRemainingMinutes] = useState(10);

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
  return (
    <div className="container mx-auto mt-[4%] px-8 pb-[3%]  bg-[#F1F4F5]" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>


      <div className='py-4 flex justify-between'>
        <p><img src={logo} alt="" /></p>
        <span className='flex  items-center gap-4'>
          <p className='text-[16px] font-normal inter_ff'><Link to="/Dashboard3">Next</Link></p>
          <p className='text-[16px] font-normal inter_ff'>Support</p>
          <p className='flex border rounded-2xl font-bold px-2 py-2  items-center'><span className='w-[32px] h-[32px] bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-[14px]  inter_ff mr-[9px] '>J </span> John Doe</p>
        </span>
      </div>

      <div className="bg-white rounded-lg shadow-md pb-4 px-12">
        <div className='flex justify-between'>
          <span className='mt-[20px]'>
            <h2 className="text-[30px]  font-bold inter_ff mb-1">Recorded to Text</h2>
            <p className="text-[#808080] mb-4">
              Quickly transcribe your audio to text.</p>
          </span>
          <div className="mt-6 mb-4">
            <p className="text-gray-600">
              Available conversion minute(s):
            </p>
            <div className="bg-gray-200 rounded-full h-[5px] mt-2 overflow-hidden">
              <div
                className="bg-[#EBEEF5] rounded-full"
                style={{ width: `${(remainingMinutes / 10) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-1">
              Remaining: {remainingMinutes} minute(s)
            </p>
          </div>
        </div>

        <div
          className="border-2  border-gray-300 rounded-lg p-10 w-full flex  text-center  cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <div className='flex flex-col w-2/6' >
            <p className='flex justify-center '>

              <img className='w-[94px] h-[94px] pl-[3%]' src={mike} alt="" />
            </p>
            <p className='text-[18px] font-bold '>Start Speaking We’ll Convert <br />
              your Voice to Text</p>
            <p className='pt-[2%]'><button className='bg-[#008CD2] text-white px-4 py-2 rounded-2xl' >Start Now</button></p>
          </div>
          <div className='w-2/3 ' style={{ borderLeft: "1px solid #E4E4E4" }}>
  <p className='text-[18px] font-bold flex justify-start py-2 ml-[2%]'>Converted text Here</p>
  <div className="relative mx-[2%]">
    <textarea
      className="border border-gray-300  rounded-md px-5 py-2 w-full h-[200px] resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
      placeholder='Text Visible Here'
    ></textarea>
  </div>
</div>

        </div>

        <div className=" flex mb-4 pt-4 justify-between rounded-xl items-center border-2" style={{ borderTop: "0px " }}>
          <div className="flex gap-4 ml-[5%]">
            <div className="mb-4">
              <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="language">
                Choose Language
              </label>
              <select
                id="language"
                className="border border-gray-300 rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
              >
                <option value="en">English</option>
                <option value="en">English</option>
                <option value="en">English</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">
                Output Format
              </label>
              <select
                id="format"
                className="border border-gray-300 rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
              >
                <option value="text">Text</option>
                {/* Add more output format options */}
              </select>

            </div>
          </div>
          <p className='mr-[6%] '>
            <button
              className="bg-[#E4E4E4] text-[#808080]   font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
              onClick={handleConvert}
              disabled={remainingMinutes === 0}
            >
          Download as a Document
            </button>
          </p>

        </div>


      </div>

      {/*       
      <div className="bg-white rounded-lg shadow-lg p-8 w-100 max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Speech to Text</h1>
        <p className="text-gray-600 text-center mb-6">
          Quickly transcribe your audio to text.
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600 text-sm">
              Available conversion minute(s):
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            Remaining: 10 minute(s)
            <span className="ml-1 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/318/318839.png"
              alt="Microphone Icon"
              className="w-16 h-16"
            />
            <h2 className="text-lg font-bold mt-4">
              Start Speaking We'll Convert
              your Voice to Text
            </h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Start Now
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">
              Converted text Here
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 h-48 overflow-auto">
              <p className="text-gray-600">
                Text Visible Here
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div>
              <label htmlFor="language" className="block text-gray-600 font-bold mb-2">
                Choose Language
              </label>
              <select
                id="language"
                className="bg-gray-300 rounded-md px-3 py-2"
              >
                <option value="english">English</option>
                {/* Add more language options here */}
      {/* </select>
            </div>
            <div>
              <label htmlFor="format" className="block text-gray-600 font-bold mb-2">
                Output Format
              </label>
              <select
                id="format"
                className="bg-gray-300 rounded-md px-3 py-2"
              >
                <option value="text">Text</option>
                {/* Add more format options here */}
      {/* </select> */}
      {/* </div> */}
      {/* </div> */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"> */}
      {/* Download as a Document */}
      {/* </button> */}
      {/* // </div> */}
      {/* </div> */}

    </div>
  );
};

export default Dashboard2;
