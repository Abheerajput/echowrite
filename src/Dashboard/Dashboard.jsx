
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/svg/logo.svg";
import uploadicon from "../assets/svg/upload.svg";
import bgimg from "../assets/svg/Dashboardbgimg.svg";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className=" mx-auto mt-16 h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 " style={{
      // backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
<nav className="  bg-[#F1F4F5]  top-0 left-0 right-0 ">
<div className=" xs:flex xs:justify-between xs:px-3 px-4 py-6 flex justify-between items-center">
  <img src={logo} alt="Logo" className="h-10" />
  <div className="flex items-center space-x-6">
    <div className="hidden md:flex space-x-6 items-center">
    <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">FAQ</Link>
      <Link to="/dashboard2" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
      <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
    
      <div className="flex items-center space-x-2 rounded-3xl border-2 p-1">
        <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
        <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] pr-4 inter_fff">John Doe</span>
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
    <Link to="/dashboard2" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Next</Link>
    <Link to="#" className="text-[#000000] hover:text-gray-800 font-normal text-[16px] inter_ff transition">Support</Link>
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-[#FF9A26] flex justify-center items-center rounded-full text-white">J</div>
      <span className="text-[#000000] hover:text-gray-800 font-bold text-[16px] inter_ff0">John Doe</span>
    </div>
  </div>
</div>
</nav>


      
      
        <div className="bg-white rounded-lg  xs:px-4 shadow-md pb-6  px-12 ">
          <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
            <span className='mt-[20px] lg:mt-0 xs:mt-0' >
              <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Recorded to Text</h2>
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
          <div className="border-2  border-gray-300  rounded-lg  text-center pb-3  cursor-pointer xs:w-full"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
            <div className='flex justify-center '>

              <img className='pt-6 ' src={uploadicon} alt="" />
            </div>
            <p className="mt-4 text-[18px] poppins  font-bold text-black ">
              Drag and Drop files here
            </p>
            <p className="mt-2 text-[15px] font-normal inter_ff text-gray-500">Or</p>
            <button
              className="text-[15px] font-normal poppins text-[#008CD2]  py-2 px-4 rounded-md"
              onClick={handleFileClick}
            >
              Click to upload files here
            </button>
            <p className="mt-2 text-[15px] pb-6 poppins font-normal text-[#808080]">
              Support MP4, MP3 formats.
            </p>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileUpload}
            />

            <div className="flex  mt-4  justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

              <div className="flex gap-4 ml-[5%] xs:ml-0 pt-2  xs:pt-4">
                <div className="mb-4">
                  <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
                  <select
                    id="language"
                    className="border border-gray-300  text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}    >
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-[#808080] text-[15px] font-normal xs:w-[100px]  w-[151px] mb-2" htmlFor="format">Output Format</label>
                  <select
                    id="format"
                    className="border border-gray-300  text-[#808080] text-[15px] inter_ff font-normal rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}  >
                    <option value="text">Text</option>
                    {/* Add more output format options */}
                  </select>
                </div>
              </div>
              <p className=' lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-1/4'>
                <button
                  className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
                  onClick={handleConvert}
                  disabled={remainingMinutes === 0}
                  style={{ backgroundColor: "#E4E4E4" }}>
                  Convert
                </button>
              </p>
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../assets/svg/logo.svg";
// import uploadicon from "../assets/svg/upload.svg";
// import bgimg from "../assets/svg/Dashboardbgimg.svg";
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [remainingMinutes, setRemainingMinutes] = useState(10);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     // Process the files here (e.g., upload, convert)
//     console.log('Uploaded files:', files);
//   };

//   const handleFileClick = () => {
//     // Trigger file input click
//     document.getElementById('fileInput').click();
//   };

//   const handleFileUpload = (e) => {
//     const files = e.target.files;
//     // Process the files here (e.g., upload, convert)
//     console.log('Uploaded files:', files);
//   };

//   const handleConvert = () => {
//     // Simulate conversion process (replace with actual logic)
//     setRemainingMinutes(0);
//     // ... other actions
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className="mx-auto mt-16 px-8 pb-12 bg-[#F1F4F5] xs:mx-2 xs:mt-2 xs:px-2 md:m-0 sm:m-0" style={{
//         backgroundImage: `url(${bgimg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: "100vh"
//       }}>
//         <div className='py-4 flex justify-between items-center'>
//           <p><img src={logo} alt="Logo" /></p>
//           <div className='flex items-center gap-4'>
//             <div className='flex xs:pt-4 md:hidden lg:hidden'>
//               <button onClick={toggleMenu} className='text-gray-600 focus:outline-none'>
//                 {menuOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
//               </button>
//             </div>
//             <div className={`lg:flex md:flex items-center ${menuOpen ? 'flex' : 'hidden'} lg:block`}>
//               <p className='text-16 font-normal inter_ff lg:ml-4'><Link to="/dashboard2">Next</Link></p>
//               <p className='text-16 font-normal inter_ff lg:ml-4'>Support</p>
//               <p className='flex border rounded-2xl font-bold px-2 xs:text-[14px] items-center lg:ml-4'>
//                 <span className='w-8 h-8 xs:w-4 xs:h-4 bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-14 xs:text-[10px] inter_ff mr-2'>J</span> John Doe
//               </p>
//             </div>
//           </div>
//         </div>
      
//         <div className="bg-white rounded-lg xs:px-4 shadow-md pb-4 px-12 ">
//           <div className='flex justify-between xs:flex xs:flex-col xs:justify-around'>
//             <span className='mt-[20px]' style={{ marginTop: "20px" }}>
//               <h2 className="text-[30px] font-bold inter_ff text-[#000000]">Recorded to Text</h2>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px] ">Quickly transcribe your audio to text.</p>
//             </span>
//             <div className="mt-6 mb-4">
//               <p className=" text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
//               <div className="bg-gray-200 rounded-full h-[5px]  overflow-hidden" style={{ height: "5px", backgroundColor: "#808080" }}>
//                 <div
//                   className="bg-[#EBEEF5] rounded-full"
//                   style={{ width: `${(remainingMinutes / 10) * 100}%` }}
//                 ></div>
//               </div>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
//             </div>
//           </div>
//           <div className="border-2  border-gray-300 rounded-lg  text-center pb-3  cursor-pointer xs:w-full"
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={handleFileDrop}
//           >
//             <div className='flex justify-center'>

//               <img className='pt-6 ' src={uploadicon} alt="" />
//             </div>
//             <p className="mt-4 text-[18px] inter_ff font-bold text-black ">
//               Drag and Drop files here
//             </p>
//             <p className="mt-2 text-[15px] font-normal inter_ff text-gray-500">Or</p>
//             <button
//               className="text-[15px] font-normal inter_ff text-[#008CD2]  py-2 px-4 rounded-md"
//               onClick={handleFileClick}
//             >
//               Click to upload files here
//             </button>
//             <p className="mt-2 text-[15px] pb-6 inter_ff font-normal text-[#808080]">
//               Support MP4, MP3 formats.
//             </p>
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileUpload}
//             />

//             <div className="flex  mt-4  justify-between xs:flex xs:flex-col items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

//               <div className="flex gap-4 ml-[5%] pt-2 ">
//                 <div className="mb-4">
//                   <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
//                   <select
//                     id="language"
//                     className="border border-gray-300 rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
//                     style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}    >
//                     <option value="en">English</option>
//                     <option value="en">English</option>
//                     <option value="en">English</option>
//                     <option value="en">English</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
//                   <select
//                     id="format"
//                     className="border border-gray-300 rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
//                     style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}  >
//                     <option value="text">Text</option>
//                     {/* Add more output format options */}
//                   </select>
//                 </div>
//               </div>
//               <p className='mr-4'>
//                 <button
//                   className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
//                   onClick={handleConvert}
//                   disabled={remainingMinutes === 0}
//                   style={{ backgroundColor: "#E4E4E4" }}>
//                   Convert
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;











// import React, { useState } from 'react';
// import logo from "../assets/svg/logo.svg"
// import uploadicon from "../assets/svg/upload.svg"
// import bgimg from "../assets/svg/Dashboardbgimg.svg"
// import { Link } from 'react-router-dom';
// const Dashboard = () => {
//   const [remainingMinutes, setRemainingMinutes] = useState(10);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     // Process the files here (e.g., upload, convert)
//     console.log('Uploaded files:', files);
//   };

//   const handleFileClick = () => {
//     // Trigger file input click
//     document.getElementById('fileInput').click();
//   };

//   const handleFileUpload = (e) => {
//     const files = e.target.files;
//     // Process the files here (e.g., upload, convert)
//     console.log('Uploaded files:', files);
//   };

//   const handleConvert = () => {
//     // Simulate conversion process (replace with actual logic)
//     setRemainingMinutes(0);
//     // ... other actions
//   };

//   return (

//     <>
   
//     <div className=" mx-auto mt-16 px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 " style={{
//       backgroundImage: `url(${bgimg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}>
//       <div className='py-4 flex justify-between xs:flex xs:flex-col '>
//         <p><img src={logo} alt="" /></p>
//         <span className='flex items-center gap-4'>
//           <p className='text-[16px] font-normal inter_ff'><Link to="/Dashboard2">Next</Link></p>
//           <p className='text-[16px] font-normal inter_ff'>Support</p>
//           <p className='flex border rounded-2xl font-bold px-2 -py-2 items-center' >
//             <span className='w-[32px] h-[32px] bg-[#FF9A26] flex justify-center items-center rounded-full text-white text-[14px] inter_ff mr-[9px]' style={{backgroundColor:"#FF9A26",height:"28px",width:"28px"}}>J</span> John Doe
//           </p>
//         </span>
//       </div>
//       <div className=" bg-white rounded-lg shadow-md pb-4 px-12 xs:px-2">
//       <div className='flex justify-between xs:flex xs:flex-col xs:justify-around'>
//           <span className='mt-[20px]' style={{marginTop:"20px"}}>
//             <h2 className="text-[30px] font-bold inter_ff">Recorded to Text</h2>
//             <p className="text-[#808080] mt-[-4px] ">Quickly transcribe your audio to text.</p>
//           </span>
//           <div className="mt-6 mb-4">
//             <p className="text-gray-600">Available conversion minute(s):</p>
//             <div className="bg-gray-200 rounded-full h-[5px]  overflow-hidden" style={{height:"5px",backgroundColor:"#808080"}}>
//               <div
//                 className="bg-[#EBEEF5] rounded-full"
//                 style={{ width: `${(remainingMinutes / 10) * 100}%` }}
//               ></div>
//             </div>
//             <p className="text-gray-600 mt-1">Remaining: {remainingMinutes} minute(s)</p>
//           </div>
//         </div>
//         <div className="border-2  border-gray-300 rounded-lg  text-center pb-3  cursor-pointer xs:w-2/3"
//           onDragOver={(e) => e.preventDefault()}
//           onDrop={handleFileDrop}
//         >
//           <div className='flex justify-center'>

//             <img className='pt-6 ' src={uploadicon} alt="" />
//           </div>
//           <p className="mt-4 font-bold text-black ">
//             Drag and Drop files here
//           </p>
//           <p className="mt-2 text-sm text-gray-500">Or</p>
//           <button
//             className="text-[15px] font-normal text-[#008CD2]  py-2 px-4 rounded-md"
//             onClick={handleFileClick}
//           >
//             Click to upload files here
//           </button>
//           <p className="mt-2 text-[15px] pb-6 font-normal text-[#808080]">
//             Support MP4, MP3 formats.
//           </p>
//           <input
//             type="file"
//             id="fileInput"
//             className="hidden"
//             onChange={handleFileUpload}
//           />



// <div className="flex  mt-4  justify-between  items-center " style={{ borderTopWidth: "1px " }}>
  
//           <div className="flex gap-4 ml-[5%] pt-2 ">
//             <div className="mb-4">
//               <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="language">Choose Language</label>
//               <select
//                 id="language"
//                 className="border border-gray-300 rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
//                      style={{padding:"4px 12px 4px 12px",borderRadius:"7px"}}    >
//                 <option value="en">English</option>
//                 <option value="en">English</option>
//                 <option value="en">English</option>
//                 <option value="en">English</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
//               <select
//                 id="format"
//                 className="border border-gray-300 rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
//                 style={{padding:"4px 12px 4px 12px",borderRadius:"7px"}}  >
//                 <option value="text">Text</option>
//                 {/* Add more output format options */}
//               </select>
//             </div>
//           </div>
//           <p className='mr-4'>
//             <button
//               className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
//               onClick={handleConvert}
//               disabled={remainingMinutes === 0}
//               style={{backgroundColor:"#E4E4E4"}}>
//               Convert
//             </button>
//           </p>
//         </div>
//         </div>




//       </div>
//     </div>
//     </>
//   );
// };

// export default Dashboard;


















