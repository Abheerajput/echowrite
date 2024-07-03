
import React from 'react';
import { GiRoundStar } from "react-icons/gi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import makeTech from "../assets/svg/maketeach.svg";
import Reveiwer from "../assets/svg/pic1.svg";
import Reveiwer2 from "../assets/svg/pic2.svg";

const Reviews = () => {
  return (
    <>
      <div className='bg-[#F4F7FA] pb-[3%]'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 pt-12 pb-8 md:px-[4%] lg:px-[4%] sm:px-[4%] xs:px-[20px]">
          See what users say about EchoWrite
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 xl:pl-[4%] lg:pl-[4%]">
          <div className="bg-white rounded-3xl p-6 lg:p-8 mx-4 mb-4 lg:mb-0 sm:h-1/2 md:h-3/4 md:w-3/4 lg:w-3/4   ">
            <img className="mx-auto mb-4" src={makeTech} alt="MakeTech Icon" />
            <p className="text-base md:text-lg lg:text-xl font-normal text-center">
              "EchoWrite has revolutionized our meeting documentation. The real-time transcription is incredibly accurate, saving us hours every week. Highly recommend it!"
            </p>
            <div className="flex justify-center gap-2 mt-6  xl:mt-[20%] lg:mt-[36%]">
              <input type="radio" name="rating1" id="rating1" />
              <input type="radio" name="rating1" id="rating2" />
              <input type="radio" name="rating1" id="rating3" />
              <input type="radio" name="rating1" id="rating4" />
            </div>
          </div>

          <div className="flex flex-col gap-8   sm:h-1/2 md:h-3/4 md:w-3/4 xl:pr-[4%] lg:pr-[4%] lg:w-3/4 mx-4">
            <div className="bg-white rounded-3xl p-4 lg:p-6">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={Reveiwer} alt="Reviewer 1" />
                <p className="text-base md:text-lg lg:text-xl">
                  "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 lg:ml-[13%] sx:ml-[16%] md:ml-[9%]">
                <p className="text-gray-600">By Christopher</p>
                <div className="flex gap-1">
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <FaRegStarHalfStroke className="text-[#F47D1E]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4  lg:p-6">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={Reveiwer2} alt="Reviewer 2" />
                <p className="text-base md:text-lg lg:text-xl">
                  "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 ml-0 lg  md:ml-[9%]">
                <p className="text-gray-600">By Christopher</p>
                <div className="flex gap-1">
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <GiRoundStar className="text-[#F47D1E]" />
                  <FaRegStarHalfStroke className="text-[#F47D1E]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
// import React from 'react';
// import { GiRoundStar } from "react-icons/gi";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import makeTech from "../assets/svg/maketeach.svg";
// import Reveiwer from "../assets/svg/pic1.svg";
// import Reveiwer2 from "../assets/svg/pic2.svg";

// const Reviews = () => {
//   return (
//     <>
//       <div className='bg-[#F4F7FA] pb-[3%]'>
//         <h1 className="text-[40px] md:text-[30px] lg:text-[40px] font-bold text-center mb-8 pt-12 pb-8">
//           See what users say about EchoWrite
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <div className="bg-white rounded-3xl p-8 lg:p-10 xl:w-3/4 lg:w-3/4 ml-[20%] ">
//             <img className="mx-auto mb-4" src={makeTech} alt="MakeTech Icon" />
//             <p className="text-lg lg:text-xl font-normal text-center">
//               "EchoWrite has revolutionized our meeting documentation. The real-time transcription is incredibly accurate, saving us hours every week. Highly recommend it!"
//             </p>
//             <div className="flex justify-center gap-2 mt-6 lg:mt-10">
//               <input type="radio" name="rating1" id="rating1" />
//               <input type="radio" name="rating1" id="rating2" />
//               <input type="radio" name="rating1" id="rating3" />
//               <input type="radio" name="rating1" id="rating4" />
//             </div>
//           </div>

//           <div className="flex flex-col gap-8 pb-8   lg:pb-0">
//             <div className="bg-white rounded-3xl xl:w-3/4 md:w-3/4 p-4 lg:p-6">
//               <div className="flex items-center mb-4">
//                 <img className=" rounded-lg" src={Reveiwer} alt="Reviewer 1" />
//                 <p className="ml-4 text-lg lg:text-xl">
//                   "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
//                 </p>
//               </div>
//               <div className="flex items-center justify-start gap-4 ml-[10%] md:ml-[15%] lg:ml-[15%]">
//                 <p className="text-gray-600">By Christopher</p>
//                 <div className="flex gap-1">
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <FaRegStarHalfStroke className="text-[#F47D1E]" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-3xl  xl:w-3/4 md:w-3/4 p-4 lg:p-6">
//               <div className="flex items-center  mb-4">
//                 <img className="rounded-lg" src={Reveiwer2} alt="Reviewer 2" />
//                 <p className="ml-4 text-lg lg:text-xl">
//                   "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
//                 </p>
//               </div>
//               <div className="flex items-center justify-start gap-4 ml-[10%] md:ml-[15%] lg:ml-[15%]">
//                 <p className="text-gray-600">By Christopher</p>
//                 <div className="flex gap-1">
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <GiRoundStar className="text-[#F47D1E]" />
//                   <FaRegStarHalfStroke className="text-[#F47D1E]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Reviews;


// import React from 'react'
// import { GiRoundStar } from "react-icons/gi";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import makeTech from "../assets/svg/maketeach.svg"
// import Reveiwer from "../assets/svg/pic1.svg"
// import Reveiwer2 from "../assets/svg/pic2.svg"

// const Reviews = () => {

//   return (
//     <div>
//       <div className="bg-[#F4F7FA]    ">
//         <div className="text-center  pt-[60px]">
//           <h1 className="font-bold text-4xl  inter_ff">See what users say about EchoWrite</h1>
          
//           <div class="grid grid-rows-1 grid-flow-col gap-4 mt-[47px] pb-[60px] ">
//             <div class="row-span-3 grid text-center  rounded-3xl bg-white ml-[7rem] mx-[15%] mr-[4%]">
//               <img className='pl-[30%] pt-[6%]' src={makeTech} alt="" />
//               <p className='text-[18px] inter_ff px-[20px] font-normal  pb-[8%] '>"EchoWrite has revolutionized our meeting documentation.   The real-time transcription is incredibly accurate, saving us <br/>  hours every week. Highly recommend it!"</p>
//               <div className='flex justify-center gap-8  '>  
//                 <input type="radio" name="" id="" />
//                 <input type="radio" name="" id="" />
//                 <input type="radio" name="" id="" />
//                 <input type="radio" name="" id="" />
//               </div>


//             </div>
//             <div class="col-span-1 mt-[15px] mr-[8%]  ">
//            <div className=' mr-[8%] bg-white rounded-3xl '>
//            <div className='flex pl-[5%] pt-[4%]  '> 
//               <img src={Reveiwer} alt="" />
//               <p className='flex items-center pl-[8%] text-start text-[17px]'>"EchoWrite's speech-to-text technology is  impressive. It converts my interviews to text  effortlessly, allowing me to focus more on writing  and less on transcribing."</p>
//               </div>
//               <span className='flex  items-center justify-center mr-[5%] pb-[44px] '>
//               <p className='text-[#7A7C7F] pl-[4%] '>By Christopher</p>
//               <p className='flex pl-[2%] gap-2 '>
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <FaRegStarHalfStroke className='text-[#F47D1E]' />

//               </p>
//               </span>
//            </div>
              
            
//               <span></span>
//             </div>
//             <div class="row-span-2 col-span-1 mr-[8%] ">
//             <div className=' mr-[8%] bg-white rounded-3xl '>
//            <div className='flex pl-[5%] pt-[4%]  '> 
//               <img src={Reveiwer2} alt="" />
//               <p className='flex items-center pl-[8%] text-start text-[17px]'>"EchoWrite's speech-to-text technology is  impressive. It converts my interviews to text  effortlessly, allowing me to focus more on writing  and less on transcribing."</p>
//               </div>
//               <span className='flex  items-center justify-center mr-[5%] pb-[44px] '>
//               <p className='text-[#7A7C7F]  pl-[4%]'>By Christopher</p>
//               <p className='flex pl-[2%] gap-2 '>
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <GiRoundStar className='text-[#F47D1E]' />
//                 <FaRegStarHalfStroke className='text-[#F47D1E]' />

//               </p>
//               </span>
//            </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Reviews
