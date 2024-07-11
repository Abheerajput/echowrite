import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import uploadicon from "../assets/svg/upload.svg";
import Navbar from './Navbar';

const Dashboard = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && (file.type === 'audio/mp3' || file.type.startsWith('audio/'))) {
      setUploading(true);
      const fakeUpload = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(fakeUpload);
            setUploading(false);
            setUploadSuccess(true);
            setUploadedFile(file);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    } else {
      alert('Please upload a valid MP3 or audio file.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: 'audio/*',
    noClick: true,
    noKeyboard: true
  });

  const handleConvert = () => {
    setRemainingMinutes(0);
  };

  const dashboardLinks = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '#' },
    { name: 'Support', path: '#' },
  ];

  const handleDelete = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setUploadSuccess(false);
  };

  return (
    <>
      <div className="mx-auto mt-16 h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0">
        <Navbar links={dashboardLinks} />
        <div className="bg-white rounded-lg xs:px-4 shadow-md pb-6 px-12">
          <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
            <span className='mt-[20px] lg:mt-0 xs:mt-0'>
              <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Recorded to Text</h2>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px]">Quickly transcribe your audio to text.</p>
            </span>
            <div className="mt-6 mb-4">
              <p className="text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
              <div className="bg-[#EBEEF5] rounded-full h-[5px] overflow-hidden" style={{ height: "5px" }}>
                <div className="bg-[#EBEEF5] rounded-full" style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
              </div>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
            </div>
          </div>

          {!uploadedFile && (
            <div {...getRootProps()} className="border-2 border-gray-300 flex xs:flex-col-reverse justify-center items-center rounded-lg text-center pb-3 cursor-pointer xs:w-full">
              <input {...getInputProps()} id="fileInput" />
              <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <div className='flex justify-center' onClick={open}>
                  <img className='pt-6' src={uploadicon} alt="Upload Icon" />
                </div>
                <p className="mt-4 text-[18px] poppins font-bold text-black" onClick={open}>
                  {isDragActive ? 'Drop the files here ...' : 'Drag and Drop files here'}
                </p>
                <p className="mt-2 text-[15px] font-normal inter_ff text-gray-500">Or</p>
                <button
                  className="text-[15px] font-normal poppins text-[#008CD2] py-2 px-4 rounded-md"
                  onClick={open}
                >
                  Click to upload files here
                </button>
                <p className="mt-2 text-[15px] pb-6 poppins font-normal text-[#808080]">
                  Support MP4, MP3 formats.
                </p>
              </div>
            </div>
          )}

<div className="flex flex-col items-center p-4 w-full">
      {uploading && (
        <div className="mt-4 w-full flex flex-col items-center">
          <p className="text-sm sm:text-base text-gray-500">Uploading... {uploadProgress}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-4 mt-2">
            <div className="bg-blue-600 h-2 sm:h-4 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        </div>
      )}

      {uploadSuccess && (
        <div className="mt-4 w-full flex flex-col items-center">
          <p className="text-sm sm:text-base text-green-500">File uploaded successfully!</p>
        </div>
      )}

      {uploadedFile && (
        <motion.div
          className="mt-4 border-2 border-gray-300 rounded-lg p-4 justify-center flex flex-col sm:flex-row items-center sm:items-start  md:w-2/3 lg:w-1/2 xs:w-full  max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start custom-width md:w-2/3 lg:w-1/2 xs:w-1/2">
          
            <div className="flex justify-between items-center custom-width w-full mb-2">
              <h3 className="text-lg sm:text-xl  font-bold text-black">Uploaded File</h3>
              <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                <IoClose size={24} />
              </button>
            </div>

            <div className="w-full mb-2">
           
              <div className="w-full bg-gray-200 rounded-full h-2 xs:h-2">
                <div className="bg-blue-600 h-2 xs:h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            </div>

            <div className="w-full text-start">
            
              <p className="text-sm sm:text-base text-gray-500 truncate">
                {uploadedFile.name.split(' ').slice(0, 5).join(' ')}
              </p>
              <p className="text-sm sm:text-base text-gray-500">Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              <p className="text-xs sm:text-sm text-gray-400">Type: {uploadedFile.type.split('/')[1]}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
          <div className="flex mt-4 justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap" style={{ borderTopWidth: "1px" }}>
            <div className="flex gap-4 ml-[5%] xs:ml-0 pt-2 xs:pt-4">
              <div className="mb-4">
                <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
                <select
                  id="language"
                  className="border border-gray-300 text-[#808080] text-[15px] inter_ff xs:w-[100px] w-[151px] font-normal rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
                >
                  <option value="en">English</option>
                  {/* Add more language options */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#808080] text-[15px] font-normal xs:w-[100px] w-[151px] mb-2" htmlFor="format">Output Format</label>
                <select
                  id="format"
                  className="border border-gray-300 text-[#808080] text-[15px] inter_ff font-normal rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                  style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
                >
                  <option value="text">Text</option>
                  {/* Add more output format options */}
                </select>
              </div>
            </div>
            <p className='lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-1/4'>
              <button
                className="text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
                onClick={handleConvert}
                disabled={remainingMinutes === 0 || !uploadedFile}
                style={{ backgroundColor: uploadedFile ? "#008CD2" : "#E4E4E4", color: uploadedFile ? "white" : "black" }}
              >
                Convert
              </button>
            </p>
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


















