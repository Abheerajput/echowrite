

import React, { useState } from 'react';
import messageIcon from "../assets/svg/message.svg";
import backgroundImage from "../assets/images/backgroundImage.png";

const Message = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, service } = formData;

    if (name && email && phone && service) {
      setIsSubmitted(true);
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="bg-[#232734] py-8 xs:py-4" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className='flex justify-center items-center'>
          <div className="pt-8 xs:pt-2 lg:pl-8 ">
            <p className='xs:flex xs:justify-center '><img src={messageIcon} alt="Message Icon" className="mx-auto lg:mx-0" /></p>
            <h1 className='text-white text-[40px] xs:text-[30px] font-bold inter_ff text-center lg:text-left mt-4'>
              Get a free consultancy from our experts!
            </h1>
            <p className='text-[#B2B3B8]   text-[15px] font-normal inter_ff pt-3 text-center lg:text-left'>
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
            </p>
          </div>



          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white p-6 lg:p-9 rounded-lg w-full lg:w-2/3">
              {isSubmitted ? (
                <div className="text-center text-green-500 font-bold">
                  Success! Your message has been sent.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {!isFormValid && (
                    <div className="text-red-500 text-sm mb-4">
                      Please fill out all fields.
                    </div>
                  )}
                  <div className="mb-4">
                    <label className="block text-[#161C2D] text-[15px] inter_ff font-semibold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#161C2D] text-[15px] inter_ff font-semibold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#161C2D] text-[15px] inter_ff font-semibold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="border rounded-lg w-full py-2 px-3 text-gray-700"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#161C2D] text-[15px] inter_ff font-semibold mb-2" htmlFor="service">
                      Which service do you need?
                    </label>
                    <select
                      className="border rounded-lg w-full py-2 px-3 text-gray-700"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="development">Development</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#008CD2] text-white text-[17px] inter_ff font-semibold py-2 px-4 rounded-3xl w-full"
                      type="submit"
                    >
                      Get Free Consultancy
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;








// import React, { useState } from 'react';
// import messageIcon from "../assets/svg/message.svg";
// import backgroundImage from "../assets/images/backgroundImage.png";

// const Message = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(true);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, phone, service } = formData;

//     if (name && email && phone && service) {
//       setIsSubmitted(true);
//       setIsFormValid(true);
//     } else {
//       setIsFormValid(false);
//     }
//   };

//   return (
//     <div className="bg-[#232734] py-8" style={{
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//       <div className="container mx-auto px-4 lg:px-8 xs:px-0 xs:">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="pt-8 lg:pt-20 lg:ml-20">
//             <p><img src={messageIcon} alt="Message Icon" className="mx-auto lg:mx-0" /></p>
//             <h1 className='text-white text-3xl lg:text-4xl font-bold inter_ff text-center lg:text-left mt-4'>
//               Get a free consultancy from our experts!
//             </h1>
//             <p className='text-[#B2B3B8] pt-3 text-center lg:text-left'>
//               With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
//             </p>
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <div className="bg-white p-6 lg:p-9 rounded-lg w-full lg:w-2/3">
//               {isSubmitted ? (
//                 <div className="text-center text-green-500 font-bold">
//                   Success! Your message has been sent.
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   {!isFormValid && (
//                     <div className="text-red-500 text-sm mb-4">
//                       Please fill out all fields.
//                     </div>
//                   )}
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                       Name
//                     </label>
//                     <input
//                       className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                       id="name"
//                       type="text"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                       id="email"
//                       type="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                       Phone
//                     </label>
//                     <input
//                       className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                       id="phone"
//                       type="tel"
//                       placeholder="Your Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
//                       Which service do you need?
//                     </label>
//                     <select
//                       className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                       id="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select a service</option>
//                       <option value="consultancy">Consultancy</option>
//                       <option value="development">Development</option>
//                       <option value="design">Design</option>
//                       <option value="marketing">Marketing</option>
//                     </select>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <button
//                       className="bg-[#008CD2] text-white font-bold py-2 px-4 rounded-3xl w-full"
//                       type="submit"
//                     >
//                       Get Free Consultancy
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;


// import React from 'react';
// import messageIcon from "../assets/svg/message.svg";
// import backgroundImage from "../assets/images/backgroundImage.png";

// const Message = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 pb-[5%] gap-4 bg-[#232734]" style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}>
//         <div className='pt-[20%] ml-[20%]'>
//           <p><img src={messageIcon} alt="Message Icon" /></p>
//           <h1 className='text-white text-[40px] font-bold inter_ff'>Get a free consultancy from our experts!</h1>
//           <p className='text-[#B2B3B8] pt-[3%]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.</p>
//         </div>
// <div>
// <div className=" m-8 mt-[10%] ml-[15%] p-9  bg-white w-2/3 rounded-lg ">
//           <form>
//             <div className="pb-4">
//               <label className="block text-gray-700 rounded-lg  text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className=" border rounded-lg w-full py-2 px-3 text-gray-700 "
//                 id="name"
//                 type="text"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="  border rounded-lg w-full py-2 px-3 text-gray-700  "
//                 id="email"
//                 type="email"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                 Phone
//               </label>
//               <input
//                 className="  border rounded-lg w-full py-2 px-3 text-gray-700  "
//                 id="phone"
//                 type="tel"
//                 placeholder="Your Phone Number"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
//                 Which service do you need?
//               </label>
//               <select
//                 className="  border rounded w-full py-2 px-3 text-gray-700  "
//                 id="service"
//               >
//                 <option value="">Select a service</option>
//                 <option value="consultancy">Consultancy</option>
//                 <option value="development">Development</option>
//                 <option value="design">Design</option>
//                 <option value="marketing">Marketing</option>
//               </select>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-[#008CD2]  text-white font-bold py-2 px-4 rounded-3xl w-full "
//                 type="button"
//               >
//              Get Free Consultancy
//               </button>
//             </div>
//           </form>
//         </div>
// </div>
       
//       </div>
//     </div>
//   );
// }

// export default Message;
