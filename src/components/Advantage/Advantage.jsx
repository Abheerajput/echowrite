import React, { useState } from 'react';
import firsticon from "../../assets/svg/icon.svg";
import secondicon from "../../assets/svg/secondicon.svg";
import PhoneIcon from "../../assets/svg/phoneicon.svg";

const Advantage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const advantages = [
    {
      icon: firsticon,
      title: 'Real-Time Transcription',
      description: 'Instantly convert speech to text with high accuracy, perfect for meetings, lectures, and spontaneous note-taking.',
      borderClass: 'border-2'
    },
    {
      icon: secondicon,
      title: 'Multi-Language Support',
      description: 'Transcribe speech in multiple languages, accommodating diverse users and expanding your global reach effortlessly.',
      borderClass: 'border-2 '
    },
    {
      icon: PhoneIcon,
      title: 'Customizable Formatting',
      description: 'Tailor the text output with various formatting options, ensuring the final document meets your specific needs and standards.',
      borderClass: 'border-2'
    }
  ];

  const formatDescription = (description) => {
    const words = description.split(' ');
    let formattedDescription = '';

    if (window.innerWidth > 468) {
      for (let i = 0; i < words.length; i += 5) {
        formattedDescription += words.slice(i, i + 5).join(' ') + '<br />';
      }
    } else {
      formattedDescription = description;
    }

    return formattedDescription;
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className=" px-4 mt-[4%] mb-[6%]">
      <div className="container max-w-[1400px] w-full mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ml-[2%]">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl ${advantage.borderClass} ${hoveredIndex === index ? 'shadow-2xl' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img src={advantage.icon} alt="" className="mb-4" />
              <h3 className="text-[22px] font-bold text-[#161C2D] inter_ff mb-2">{advantage.title}</h3>
              <p className="inter_ff font-normal text-[#161C2D] text-[17px] " dangerouslySetInnerHTML={{ __html: formatDescription(advantage.description) }}>
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Advantage;


// import React from 'react';
// import firsticon from "../../assets/svg/icon.svg";
// import secondicon from "../../assets/svg/secondicon.svg";
// import PhoneIcon from "../../assets/svg/phoneicon.svg";

// const Advantage = () => {
//   const advantages = [
//     {
//       icon: firsticon,
//       title: 'Project management',
//       description: 'Instantly convert speech to text with high accuracy, perfect for meetings, lectures, and spontaneous note-taking.',
//       borderClass: 'border-2'
//     },
//     {
//       icon: secondicon,
//       title: 'Multi-Language Support',
//       description: 'Transcribe speech in multiple languages, accommodating diverse users and expanding your global reach effortlessly.',
//       borderClass: 'border-0 shadow-2xl'
//     },
//     {
//       icon: PhoneIcon,
//       title: 'Project management',
//       description: 'Instantly convert speech to text with high accuracy, perfect for meetings, lectures, and spontaneous note-taking.',
//       borderClass: 'border-2'
//     }
//   ];

//   return (
//     <div className="flex justify-evenly mb-[4%]">
//       {advantages.map((advantage, index) => (
//         <div key={index} className={`pl-[2%] pr-[3%] rounded-2xl ${advantage.borderClass}`}>
//           <div className="pt-[10%]">
//             <p className="pb-[3%]">
//               <img src={advantage.icon} alt="" />
//             </p>
//             <h3 className="pb-[3%] font-bold text-xl inter_ff">{advantage.title}</h3>
//             <p className="pb-[5%] inter_ff ">
//               Instantly convert speech to text<br />
//               with high accuracy, perfect for<br />
//               meetings, lectures, and<br />
//               spontaneous note-taking.
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Advantage;


// import React from 'react'
// import firsticon from "../../assets/svg/icon.svg"
// import secondicon from "../../assets/svg/secondicon.svg"
// import PhoneIcon from "../../assets/svg/phoneicon.svg"
// const Advantage = () => {
//   return (
//     <div>

// <div className="flex justify-evenly">
//   <div className=' border-2 pl-[2%] pr-[3%] rounded-2xl'>
//     <div className='pt-[10%] '>
//     <p className='pb-[3%]'><img src={firsticon} alt=""  /></p>

//     <h3 className='pb-[3%] font-bold text-xl'>Project management</h3>
//     <p className='pb-[5%]'> Instantly convert speech to text <br /> with high accuracy, perfect for <br /> meetings, lectures, and <br /> spontaneous note-taking.</p>
//   </div>
//   </div>
//   <div className='  pl-[2%] pr-[3%] rounded-2xl border-0 shadow-2xl'>
//     <div className='pt-[10%] '>
//     <p className='pb-[3%]'><img src={secondicon} alt=""  /></p>

//     <h3 className='pb-[3%] font-bold text-xl inter_ff'>Multi-Language Support</h3>
//     <p className='pb-[5%]'> Transcribe speech in multiple <br /> languages, accommodating diverse <br /> users and expanding your global <br /> reach effortlessly.</p>
//   </div>
//   </div>
//   <div className=' border-2 pl-[2%] pr-[3%] rounded-2xl'>
//     <div className='pt-[10%] '>
//     <p className='pb-[3%]'><img src={PhoneIcon} alt=""  /></p>

//     <h3 className='pb-[3%] font-bold text-xl'>Project management</h3>
//     <p className='pb-[5%]'> Instantly convert speech to text <br /> with high accuracy, perfect for <br /> meetings, lectures, and <br /> spontaneous note-taking.</p>
//   </div>
//   </div>
 
 
// </div>
//       {/* <div class="grid grid-cols-3 gap-4 col-start-1 justify-center items-center ">
  
//   <div >02</div> 
//   <div>03</div>
// </div> */}
//     </div>
//   )
// }

// export default Advantage
