import React, { useState } from 'react';
import pic3 from "../assets/svg/pic3.svg";
import { FaArrowRight } from "react-icons/fa6";

const Storage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='bg-[#F4F7FA] py-8'>
        <div className=' container max-w-[1400px] w-full mx-auto px-3  flex xs:flex-col sm:flex-col md:flex-row  gap-8'>
          <div className='pt-8 xs:pt-0 flex justify-center lg:pl-8 items-center xs:justify-center  '>
            <span>

           
            <h1 className='text-[40px] xs:text-[30px] xs:ml-[3%] font-bold inter_ff text-[#161C2D] '>
              Safe and Reliable Cloud Storage
            </h1>
            <p className='text-[#696A6B] text-[17px] font-normal inter_ff pt-4'>
              Your recordings are securely stored on the cloud, ensuring privacy and easy access anytime, anywhere.
            </p>
            <p className='pt-4'>
              <button onClick={toggleModal} className='text-white px-6 py-3 bg-[#008CD2] rounded-3xl text-[17px ] font-semobold inter_ff flex items-center'>
                Get Started for free
                <FaArrowRight className='text-white ml-2' />
              </button>
            </p>
            </span>
          </div>

          <div className='flex justify-center  pt-8 pb-8 lg:pb-[5%]'>
            <img src={pic3} alt="Cloud Storage" className='w-full max-w-md' />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Get Started for Free</h2>
              <button onClick={toggleModal} className="text-xl">&times;</button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#008CD2] text-white font-bold py-2 px-4 rounded-3xl w-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Storage;





// import React, { useState } from 'react';
// import pic3 from "../assets/svg/pic3.svg";
// import { FaArrowRight } from "react-icons/fa6";

// const Storage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#F4F7FA] p-8 lg:p-16'>
//         <div className='pt-8 lg:pt-[15%] lg:ml-[25%]'>
//           <h1 className='text-2xl lg:text-4xl text-[#161C2D] inter_ff font-bold'>
//             Safe and Reliable Cloud Storage
//           </h1>
//           <p className='text-[#696A6B] text-base lg:text-lg font-normal inter_ff pt-4'>
//             Your recordings are securely stored on the cloud, ensuring privacy and easy access anytime, anywhere.
//           </p>
//           <p className='pt-4'>
//             <button onClick={toggleModal} className='text-white px-6 py-3 bg-[#008CD2] rounded-3xl flex items-center'>
//               Get Started for free
//               <FaArrowRight className='text-white ml-2' />
//             </button>
//           </p>
//         </div>
//         <div className='flex justify-center lg:justify-start pt-8 lg:pt-[5%] pb-8 lg:pb-[5%]'>
//           <img src={pic3} alt="Cloud Storage" className='w-full max-w-md' />
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold">Get Started for Free</h2>
//               <button onClick={toggleModal} className="text-xl">&times;</button>
//             </div>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                   id="name"
//                   type="text"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                   id="email"
//                   type="email"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <button
//                   className="bg-[#008CD2] text-white font-bold py-2 px-4 rounded-3xl w-full"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Storage;

// import React from 'react'
// import pic3 from "../assets/svg/pic3.svg"
// import { FaArrowRight } from "react-icons/fa6";
// const Stroage = () => {
//   return (
//     <div className='grid grid-cols-2 bg-[#F4F7FA]'>
//         <div className='pt-[15%] ml-[25%]'>
//             <h1 className='text-[40px] text-[#161C2D] inter_ff font-bold span-col-1'>Safe and Reliable Cloud Storage</h1>
//             <p className='text-[#696A6B] text-[17px] font-normal inter_ff pt-[3%]'>Your recordings are securely stored on the cloud, ensuring privacy and easy access anytime, anywhere.</p>
//        <p className='pt-[2%]'>
//        <button className='text-white px-6 py-3 bg-[#008CD2] rounded-3xl flex'>Get Started for free  <FaArrowRight  className='text-white mt-[7px] pl-[3%]' /></button>
//        </p>
//         </div>
//         <div className='ml-[4%] pt-[5%] pb-[5%]'>
//             <img src={pic3} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Stroage
