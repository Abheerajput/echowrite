import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { GiRoundStar } from "react-icons/gi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import makeTech from "../assets/svg/maketeach.svg";
import Reviewer from "../assets/svg/pic1.svg";
import Reviewer2 from "../assets/svg/pic2.svg";

const Reviews = () => {
  return (
    <>
      <div className='bg-[#F4F7FA] xs:pb-8 pb-[3%]'>
        <div className="container max-w-[1400px] w-full mx-auto px-3">
          <h1 className="text-[40px] text-[#161C2D] xs:text-[30px] font-bold inter_ff text-center xs:px-2 mb-8 xs:mb-2 xs:pt-4 xs:pb-2 pt-12 pb-8 px-4">
            See what users say about EchoWrite
          </h1>
          <div className="flex flex-col lg:flex-row h-full xs:px-1 px-4 justify-center lg:space-x-4">
            <div className="bg-white h-full rounded-3xl p-6 lg:p-8 xs:mx-1 mx-4 mb-4 lg:mb-0 w-full lg:w-1/2">
              <img className="mx-auto mb-4" src={makeTech} alt="MakeTech Icon" />
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                className="custom-carousel " 
              > 
             

             
                <div>
                  <p className="text-[18px] font-normal inter_ff text-[#212529] text-center">
                    "EchoWrite has revolutionized our meeting documentation. The real-time transcription is incredibly accurate, saving us hours every week. Highly recommend it!"
                  </p>
                 
                </div>
                <div>
                  <p className="text-[18px] font-normal inter_ff text-[#212529] text-center">
                    "EchoWrite's AI capabilities are unmatched. The ease of use and accuracy are top-notch."
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-normal inter_ff text-[#212529] text-center">
                    "The best transcription tool we've ever used. It has significantly improved our workflow."
                  </p>
                </div>
                
               
               
                         </Carousel>
            </div>
            <div className="flex flex-col xs:mx-1 gap-8 xs:gap-4 w-full lg:w-1/2 mx-4">
              <div className="bg-white h-full rounded-3xl p-4 lg:p-6">
                <div className="flex items-center xs:flex xs:flex-col mb-4">
                  <img className="w-12 h-12 xs:my-4 rounded-lg xs:mr-2 mr-4" src={Reviewer} alt="Reviewer 1" />
                  <p className="text-[18px] font-normal inter_ff text-[#212529]">
                    "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 md:ml-[9%]">
                  <p className="text-[#212529] text-[15px] font-normal inter_ff">By Christopher</p>
                  <div className="flex gap-1">
                    <GiRoundStar className="text-[#F47D1E]" />
                    <GiRoundStar className="text-[#F47D1E]" />
                    <GiRoundStar className="text-[#F47D1E]" />
                    <GiRoundStar className="text-[#F47D1E]" />
                    <FaRegStarHalfStroke className="text-[#F47D1E]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 lg:p-6">
                <div className="flex items-center xs:flex xs:flex-col mb-4 xs:mb-2">
                  <img className="w-12 h-12 xs:my-4 rounded-lg mr-4" src={Reviewer2} alt="Reviewer 2" />
                  <p className="text-[18px] font-normal inter_ff text-[#212529]">
                    "EchoWrite's speech-to-text technology is impressive. It converts my interviews to text effortlessly, allowing me to focus more on writing and less on transcribing."
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 md:ml-[9%]">
                  <p className="text-[#212529] text-[15px] font-normal inter_ff">By Christopher</p>
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
