import React, { useState } from 'react';
import mainImg from "../../assets/svg/mainpage.svg";
import background from "../../assets/images/background.png";
import "./hero.css";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
      handleCloseForm();
    }, 3000);
  };

  return (
    <>
      <div className="custom-bg" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 pb-[26%] mb-[-26%]">
          <div className="md:col-start-2 md:col-span-4 text-center ">
            <p className="font-bold text-center  xs:text-[35px] text-[50px] text-[#04324D] inter_ff  pt-10 md:pt-20 ">
              Revolutionary Voice-to-Text Technology
            </p>
          </div>
          <div className="md:col-start-2 md:col-span-4">
            <p className="text-[17px]  font-normal inter_ff text-[#545454] px-4 md:px-0 text-center mt-4 md:mt-6">
              Experience seamless voice-to-text conversion with our cutting-edge AI. Whether you're dictating notes, writing articles, or capturing ideas, our tool guarantees fast, reliable, and accurate transcriptions.
            </p>
          </div>
          <div className="md:col-start-2 flex mb-4 justify-center md:justify-center md:col-span-4 pt-5">
            <button onClick={handleOpenForm} className="bg-[#008CD2] text-white font-medium inter_ff text-[17px] py-2 px-6 rounded-3xl">
              Get Started For Free
            </button>
          </div>
        </div>
       
      </div>
      <div className=" flex justify-center md:col-start-2 md:col-span-4 relative">
          <img src={mainImg} alt="Main" />
        </div>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
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
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 text-gray-700"
                  id="address"
                  type="text"
                  placeholder="Your Address"
                  required
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
            <div className="flex items-center justify-center mt-4">
              <button
                className="text-sm text-gray-500 underline"
                type="button"
                onClick={handleCloseForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isSuccessMessageVisible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Successfully Submitted!
        </div>
      )}
    </>
  );
};

export default Hero;


// import React, { useState } from 'react';
// import mainImg from "../../assets/svg/mainpage.svg";
// import background from "../../assets/images/background.png"
// import "./hero.css";

// const Hero = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   const handleOpenForm = () => {
//     setIsFormOpen(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSuccessMessageVisible(true);
//     setTimeout(() => {
//       setIsSuccessMessageVisible(false);
//       handleCloseForm();
//     }, 3000);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-6 gap-4  custom-bg pb-[26%] mb-[-26%] "style={{
//       backgroundImage: `url(${background})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}> 
//         <div className="col-start-2 col-span-4">
//           <p className="font-bold text-5xl flex text-color justify-center pt-[70px] lbre_ff text-wrap">Revolutionary Voice-to-Text Technology</p>
//         </div>
//                    <div className="md:col-start-2 md:col-span-4 flex jusify-center">
//              <p className="text-[17px]  font-normal inter_ff text-[#545454] px-4 md:px-0 text-center mt-4 md:mt-6">
//                Experience seamless voice-to-text conversion with our cutting-edge AI. Whether you're dictating notes, writing articles, or capturing ideas, our tool guarantees fast, reliable, and accurate transcriptions.
//              </p>
//            </div>
//         <div className="col-start-2 flex justify-center col-span-4 pt-5">
//           <button onClick={handleOpenForm} className="bg-[#008CD2] text-white font-medium inter_ff text-[17px] py-2 px-6 rounded-3xl">Get Started For Free</button>
//         </div>
//       </div>
//       <div className="col-start-2 flex justify-center col-span-4 relative">
//         <img src={mainImg} alt="Main" />
//       </div>

//       {isFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
//             <h2 className="text-2xl font-bold mb-4">Get Started</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                   id="name"
//                   type="text"
//                   placeholder="Your Name"
//                   required
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
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                   Phone
//                 </label>
//                 <input
//                   className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                   id="phone"
//                   type="tel"
//                   placeholder="Your Phone Number"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//                   Address
//                 </label>
//                 <input
//                   className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                   id="address"
//                   type="text"
//                   placeholder="Your Address"
//                   required
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
//             <div className="flex items-center justify-center mt-4">
//               <button
//                 className="text-sm text-gray-500 underline"
//                 type="button"
//                 onClick={handleCloseForm}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isSuccessMessageVisible && (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           Successfully Submitted!
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;

