import React, { useState } from 'react';
import logo from "../assets/svg/logo.svg"
import uploadicon from "../assets/svg/upload.svg"
import bgimg from "../assets/svg/Dashboardbgimg.svg"
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Process the files here (e.g., upload, convert)
    console.log('Uploaded files:', files);
  };

  const handleFileClick = () => {
    // Trigger file input click
    document.getElementById('fileInput').click();
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    // Process the files here (e.g., upload, convert)
    console.log('Uploaded files:', files);
  };

  const handleConvert = () => {
    // Simulate conversion process (replace with actual logic)
    setRemainingMinutes(0);
    // ... other actions
  };

  return (
    <div className="container mx-auto mt-[4%] px-8 pb-[3%] bg-[#F1F4F5]" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className='py-4 flex justify-between'>
        <p><img src={logo} alt="" /></p>
        <span className='flex  items-center gap-4'>
          <p className='text-[16px] font-normal inter_ff'><Link to="/Dashboard2"> Next</Link></p>
          <p className='text-[16px] font-normal inter_ff'>Support</p>
          <p className='flex border rounded-2xl font-bold px-2 py-2  items-center'><span className='w-[32px] h-[32px] bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-[14px]  inter_ff mr-[9px] '>J </span> John Doe</p>
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-md px-12 pb-[3%]">
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
                className="bg-[#EBEEF5]  rounded-full"
                style={{ width: `${(remainingMinutes / 10) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-1">
              Remaining: {remainingMinutes} minute(s)
            </p>
          </div>
        </div>
        <div className="border-2  border-gray-300 rounded-lg p-10 text-center pb-3 divide-y cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <div className='flex justify-center'>

            <img src={uploadicon} alt="" />
          </div>
          <p className="mt-4 font-bold text-black ">
            Drag and Drop files here
          </p>
          <p className="mt-2 text-sm text-gray-500">Or</p>
          <button
            className="text-[15px] font-normal text-[#008CD2]  py-2 px-4 rounded-md"
            onClick={handleFileClick}
          >
            Click to upload files here
          </button>
          <p className="mt-2 text-[15px] font-normal text-[#808080]">
            Support MP4, MP3 formats.
          </p>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileUpload}
          />



          <div className=" flex mb-4 mt-[4%]  justify-between rounded-xl items-center ">
            
            <div className="flex gap-4 pl-[5%]">
              <hr />
              <div className="mb-4">
                <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="language">
                  Choose Language
                </label>
                <select
                  id="language"
                  className="border border-gray-300 rounded-md px-5 py-2 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
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
                  className="border border-gray-300 rounded-md px-5 py-2 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                >
                  <option value="text">Text</option>
                  {/* Add more output format options */}
                </select>

              </div>
            </div>
            <p >
              <button
                className="bg-[#E4E4E4] text-[#808080]   font-bold py-2 px-4 rounded-2xl"
                onClick={handleConvert}
                disabled={remainingMinutes === 0}
              >
                Convert
              </button>
            </p>

          </div>
        </div>




      </div>
    </div>
  );
};

export default Dashboard;