import React from 'react';
import sectionImage from "../../assets/svg/sectionImage.svg";
import "../Section/section.css";

const Section = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center py-10 lg:pl-9">
          <h1 className='text-4xl lg:text-5xl mb-4 font-bold inter_ff section-text-color'>
            Innovating Speech- <br /> to-Text Solutions
          </h1>
          <p className='section-text-color text-lg font-normal paragraph-text-color mb-6'>
            Dedicated to revolutionizing speech-to-text technology, our AI ensures accurate, efficient, and seamless transcriptions for users worldwide.
          </p>
          <button className='text-white bg-sky-600 px-8 py-2 font-bold rounded-full'>
            Learn how We Walk
          </button>
        </div>

        <div className="flex justify-center py-10 lg:py-0">
          <img src={sectionImage} alt="Section" className="max-w-full md:max-w-md lg:max-w-lg" />
        </div>

        <div className="grid grid-rows-3 gap-12 py-10 lg:pr-9">
          <div>
            <h1 className='text-xl font-bold inter_ff'>1M+ Users Worldwide</h1>
            <p className='text-lg font-normal paragraph-text-color'>
              Trusted by over a million users globally for reliable and precise transcriptions.
            </p>
          </div>
          <div>
            <h1 className='text-xl font-bold inter_ff'>92% User Satisfaction</h1>
            <p className='text-lg font-normal paragraph-text-color'>
              Achieving high satisfaction rates through continuous improvement.
            </p>
          </div>
          <div>
            <h1 className='text-xl font-bold inter_ff'>500+ Enterprises Served</h1>
            <p className='text-lg font-normal paragraph-text-color'>
              Empowering numerous businesses with our advanced speech-to-text solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

// import React from 'react'
// import sectionImage from "../../assets/svg/sectionImage.svg"
// import "../Section/section.css"
// const Section = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-3 ">
//         <div className="grid justify-end m-0 p-0  py-[10%] pl-[9%]">
//           <h1 className='text-[40px] mb-0 font-bold inter_ff section-text-color  flex justify-center items-center'>Innovating Speech- <br />to-Text Solutions</h1>
//           <p className='section-text-color text-lg font-normal paragraph-text-color flex justify-center items-center'>Dedicated to revolutionizing speech   -to-text <br /> technology, our AI ensures accurate, efficient, <br /> and seamless transcriptions for users <br /> worldwide.</p>
//           <span>
//           <button className='text-white bg-sky-600 flex justify-center items-center px-8 py-2 font-bold rounded-full '>Leran how We Walk</button>
//           </span>
         
//         </div>
//         <div className="flex justify-center mr-[20%]">
//           <div>
//             <img src={sectionImage} alt="" />
//           </div>
//         </div>

//         <div class="grid grid-rows-4 py-[4%] pr-[9%] gap-12 flex flex-col justify-between">
//           <div>
//             <h1 className='text-xl font-bold inter_ff'>1M+ Users Worldwide</h1>
//             <p className='text-lg font-normal paragraph-text-color '>Trusted by over a million users globally <br /> for reliable and precise.</p>
//           </div>
//           <div>
//             <h1 className='text-xl font-bold inter_ff'>92% User Satisfaction</h1>
//             <p className='text-lg font-normal paragraph-text-color'>Achieving high satisfaction rates <br /> through continuous improvement</p>
//           </div>
//           <div>
//             <h1 className='text-xl font-bold inter_ff'>500+ Enterprises Served</h1>
//             <p className='text-lg font-normal paragraph-text-color'>Empowering numerous businesses <br /> with our advanced speech-to-text solutions.</p>
//           </div>
//         </div>



//       </div>
//     </div>
//   )
// }

// export default Section
