import React, { useState } from 'react';
import bgimg from "../assets/svg/Dashboardbgimg.svg"
import logo from "../assets/svg/logo.svg"
import mike from "../assets/svg/mikeicon.svg"
import playicon from "../assets/svg/playicon.svg"
import { Link } from 'react-router-dom';
const Dashboard3 = () => {


  const [remainingMinutes, setRemainingMinutes] = useState(10);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Uploaded files:', files);
  };




  const handleConvert = () => {

    setRemainingMinutes(0);

  };
  return (
    <div className="container mx-auto px-8 mt-[4%] pb-[3%]  bg-[#F1F4F5]" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>


      <div className='py-4 flex justify-between'>
        <p><img src={logo} alt="" /></p>
        <span className='flex  items-center gap-4'>
        <p className='text-[16px] font-normal inter_ff'><Link to="/Dashboard4">Next</Link></p>
          <p className='text-[16px] font-normal inter_ff'>Support</p>
          <p className='flex border rounded-2xl font-bold px-2 -py-2  items-center'><span className='w-[32px] h-[32px] bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-[14px]  inter_ff mr-[9px] '>J </span> John Doe</p>
        </span>
      </div>

      <div className="bg-white rounded-lg shadow-md pb-4 px-12">
        <div className='flex justify-between'>
          <span className='mt-[20px]'>
            <h2 className="text-[30px]  font-bold inter_ff mb-1"> Recorded to Text</h2>
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
            <p className='text-[18px] font-bold '>00:55 mins
            </p>
            <p className='text-[#808080]'>Support Multiple Language.</p>
            <p className='pt-[2%] flex justify-center gap-2'>
              <img src={playicon} alt="" />
              <button className='text-white px-6 py-1 rounded-2xl' style={{backgroundColor:"#D93F21"}}>
                Stop
              </button>
            </p>
          </div>
          <div className='w-2/3 ' style={{ borderLeft: "1px solid #E4E4E4" }}>
            <p className='text-[18px] font-bold flex justify-start py-2 ml-[2%]'>Converted text Here</p>
            <div className="relative mx-[2%]">
              <textarea
                className="border border-gray-300  rounded-md px-5 py-2 w-full h-[200px] resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over  Latin words combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">

 </textarea>
 
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
    </div>
  );
};

export default Dashboard3;
