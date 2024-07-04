import React, { useState } from 'react';
import tick from "../assets/svg/tick.svg";

const Transcription = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const dropdownData = [
    {
      question: "How accurate is EchoWrite's transcription?",
      answer: "EchoWrite uses advanced AI technology to ensure high accuracy in transcriptions. However, accuracy may vary based on audio quality and clarity.",
      questionClass: "text-black text-[18px] inter_ff font-semibold",
      answerClass: "text-gray-700 text-[15px] font-normal inter_ff "
    },
    {
      question: "What languages does EchoWrite support?",
      answer: "EchoWrite supports multiple languages, making it a versatile tool for users worldwide.",
      questionClass: "text-black text-[18px] inter_ff font-semibold",
      answerClass: "text-gray-700 text-[15px] font-normal inter_ff "
    },
    {
      question: "Is my data secure with EchoWrite?",
      answer: "Yes, EchoWrite prioritizes your data security and employs robust measures to protect your information.",
      questionClass: "text-black text-[18px] inter_ff font-semibold",
      answerClass: "text-gray-700 text-[15px] font-normal inter_ff "
    },
    {
      question: "Can I edit the transcriptions?",
      answer: "Yes, you can easily edit the transcriptions to ensure they meet your exact requirements.",
      questionClass: "text-black text-[18px] inter_ff font-semibold",
      answerClass: "text-gray-700 text-[15px] font-normal inter_ff "
    }
  ];

  return (
    <div className="container max-w-5xl mx-auto px-4 lg:px-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pb-8">
        <div className="pt-8 md:pt-20 md:ml-20">
          <h1 className="text-[40px] text-[#161C2D] inter_ff font-bold">
            Advanced AI for Accurate Transcriptions
          </h1>
          <p className="text-gray-600 text-[16px] font-normal inter_ff pt-4">
            Our cutting-edge AI technology ensures precise speech-to-text conversions, making your transcription tasks effortless and reliable.
          </p>
          <div className="pt-4 flex">
            <div className="pt-2">
              <img src={tick} alt="Tick" />
            </div>
            <span className="pl-3">
              <h1 className="text-[18px] text-[#161C2D] inter_ff font-bold">Real-Time Processing</h1>
              <p className="text-gray-600 text-[15px] font-medium inter_ff pt-1">Instantly convert speech to text with remarkable accuracy.</p>
            </span>
          </div>
          <div className="pt-6 flex">
            <div className="pt-2">
              <img src={tick} alt="Tick" />
            </div>
            <span className="pl-3">
              <h1 className="text-[18px] text-[#161C2D]  inter_ff font-bold">Easy Editing</h1>
              <p className="text-gray-600 text-[15px] font-medium inter_ff pt-1">Edit transcriptions effortlessly to meet your exact requirements.</p>
            </span>
          </div>
        </div>
        <div className="dropdown-container mx-auto md:mr-20 mt-8 md:mt-20 bg-gray-100 p-4 rounded-lg w-full max-w-md">
          {dropdownData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={`dropdown-item cursor-pointer flex justify-between items-center ${item.questionClass}`}
                onClick={() => toggleDropdown(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${dropdownOpen === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {dropdownOpen === index && (
                <div className={`dropdown-content mt-2 pl-6 ${item.answerClass}`}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transcription;


// import React, { useState } from 'react';
// import tick from "../assets/svg/tick.svg";

// const Transcription = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   const dropdownData = [
//     {
//       question: "How accurate is EchoWrite's transcription?",
//       answer: "EchoWrite uses advanced AI technology to ensure high accuracy in transcriptions. However, accuracy may vary based on audio quality and clarity.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "What languages does EchoWrite support?",
//       answer: "EchoWrite supports multiple languages, making it a versatile tool for users worldwide.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "Is my data secure with EchoWrite?",
//       answer: "Yes, EchoWrite prioritizes your data security and employs robust measures to protect your information.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "Can I edit the transcriptions?",
//       answer: "Yes, you can easily edit the transcriptions to ensure they meet your exact requirements.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     }
//   ];

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pb-8">
//         <div className="pt-8 md:pt-20 md:ml-20">
//           <h1 className="text-3xl md:text-4xl inter_ff font-bold">
//             Advanced AI for Accurate Transcriptions
//           </h1>
//           <p className="text-gray-600 text-lg font-normal inter_ff pt-4">
//             Our cutting-edge AI technology ensures precise speech-to-text conversions, making your transcription tasks effortless and reliable.
//           </p>
//           <div className="pt-4 flex">
//             <div className="pt-2">
//               <img src={tick} alt="Tick" />
//             </div>
//             <span className="pl-3">
//               <h1 className="text-lg inter_ff font-bold">Real-Time Processing</h1>
//               <p className="text-gray-600 pt-1">Instantly convert speech to text with remarkable accuracy.</p>
//             </span>
//           </div>
//           <div className="pt-6 flex">
//             <div className="pt-2">
//               <img src={tick} alt="Tick" />
//             </div>
//             <span className="pl-3">
//               <h1 className="text-lg inter_ff font-bold">Easy Editing</h1>
//               <p className="text-gray-600 pt-1">Edit transcriptions effortlessly to meet your exact requirements.</p>
//             </span>
//           </div>
//         </div>
//         <div className="dropdown-container mx-auto md:mr-20 mt-8 md:mt-20 bg-gray-100 p-4 rounded-lg w-full max-w-md">
//           {dropdownData.map((item, index) => (
//             <div key={index} className="mb-4">
//               <div
//                 className={`dropdown-item cursor-pointer flex justify-between items-center ${item.questionClass}`}
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <span>{item.question}</span>
//                 <svg
//                   className={`h-5 w-5 transform transition-transform ${dropdownOpen === index ? 'rotate-180' : ''}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               {dropdownOpen === index && (
//                 <div className={`dropdown-content mt-2 pl-6 ${item.answerClass}`}>
//                   {item.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transcription;

// import React, { useState } from 'react';
// import tick from "../assets/svg/tick.svg";
// const Transcription = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };
//   const dropdownData = [
//     {
//       question: "How accurate is EchoWrite's transcription?",
//       answer: "EchoWrite uses advanced AI technology to ensure high accuracy in transcriptions. However, accuracy may vary based on audio quality and clarity.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "What languages does EchoWrite support?",
//       answer: "EchoWrite supports multiple languages, making it a versatile tool for users worldwide.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "Is my data secure with EchoWrite?",
//       answer: "Yes, EchoWrite prioritizes your data security and employs robust measures to protect your information.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     },
//     {
//       question: "Can I edit the transcriptions?",
//       answer: "Yes, you can easily edit the transcriptions to ensure they meet your exact requirements.",
//       questionClass: "text-black text-[18px] inter_ff font-semibold",
//       answerClass: "text-gray-700"
//     }
//   ];
  

//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2 bg-[white] pb-[5%]'>
//         <div className='pt-[15%] ml-[25%]'>
//           <h1 className='text-[40px] inter_ff font-bold span-col-1'>
//             Advanced AI for Accurate Transcriptions
//           </h1>
//           <p className='text-[#696A6B] text-[17px] font-normal inter_ff pt-[3%]'>
//             Our cutting-edge AI technology ensures precise speech-to-text conversions, making your transcription tasks effortless and reliable.
//           </p>
//           <div className='pt-[4%] flex'>
//             <div className='pt-[2%]'>
//               <img src={tick} alt="" />
//             </div>
//             <span className='pl-[3%]'>
//               <h1 className='text-[18px] inter_ff font-bold'>Real-Time Processing</h1>
//               <p className='text-[#686B77] pt-[5px]'>Instantly convert speech to text with remarkable accuracy.</p>
//             </span>
//           </div>
//           <div className='pt-[6%] flex'>
//             <div className='pt-[2%]'>
//               <img src={tick} alt="" />
//             </div>
//             <span className='pl-[3%]'>
//               <h1 className='text-[18px] inter_ff font-bold'>Real-Time Processing</h1>
//               <p className='text-[#686B77] pt-[5px]'>Instantly convert speech to text with remarkable accuracy.</p>
//             </span>
//           </div>
//         </div>
//         <div className="dropdown-container mr-[22%] mt-[15%] ml-[5%] bg-[#F4F7FA]">
//           {dropdownData.map((item, index) => (
//             <div key={index}>
//               <div
//                 className={`dropdown-item ${item.questionClass}`}
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <span>{item.question}</span>
//                 <svg
//                   className={`h-5 w-5 transform transition-transform ${dropdownOpen === index ? 'rotate-180' : ''}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               {dropdownOpen === index && (
//                 <div className={`dropdown-content ${item.answerClass}`}>
//                   {item.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transcription;





// import React from 'react'
// import tick from "../assets/svg/tick.svg"

// const Transcription = () => {
//   return (
//     <div>
//       <div className='grid grid-cols-2 bg-[white] pb-[5%]'>
//         <div className='pt-[15%] ml-[25%]'>
//           <h1 className='text-[40px] inter_ff font-bold span-col-1'>Advanced AI for Accurate Transcriptions</h1>
//           <p className='text-[#696A6B] text-[17px] font-normal inter_ff pt-[3%]'>Our cutting-edge AI technology ensures precise speech-to-text conversions, making your transcription tasks effortless and reliable.</p>
//           <p className='pt-[4%] flex '>
//             <div className='pt-[2%]'>
//               <img src={tick} alt="" />
//             </div>
//             <span className='pl-[3%]'>
//             <h1 className='text-[18px] inter_ff font-bold'>Real-Time Processing</h1>
//             <p className='text-[#686B77] pt-[5px]'>Instantly convert speech to text with remarkable accuracy.</p>
//             </span>
//           </p>
//           <p className='pt-[6%] flex'>
//             <div className='pt-[2%]'>
//               <img src={tick} alt="" />
//             </div>
//             <span className='pl-[3%]'>
//             <h1 className='text-[18px] inter_ff font-bold'>Real-Time Processing</h1>
//             <p className='text-[#686B77] pt-[5px]'>Instantly convert speech to text with remarkable accuracy.</p>
//             </span>
//           </p>
//         </div>
// <div>
// {/* dropdown */}


// </div>
//       </div>
//     </div>
//   )
// }

// export default Transcription
