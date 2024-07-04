

import React, { useState } from 'react';
import bgimg from "../../assets/images/bgimg.png"
const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const pricingPlans = [
    {
      title: "Basic",
      price: "$29",
      frequency: "One time purchase",
      description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      buttonText: "Get Started for Free",
      bgColor: "bg-[#F4F7FA]",
      titleBgColor: "bg-[#F4F7FA]",
      textColor: "text-[#008CD2]",
      btnColor: "bg-sky-600"  // Default button color for other plans
    },
    {
      title: "Standard",
      price: "$59",
      frequency: "Monthly subscription",
      description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      buttonText: "Get Started for Free",
      bgColor: "bg-[#E8F0FE]",
      titleBgColor: "bg-[#F4F7FA]",
      textColor: "text-[#0066CC]",
      btnColor: "bg-sky-600"  // Default button color for other plans
    },
    {
      title: "Premium",
      price: "$99",
      frequency: "Annual subscription",
      description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      buttonText: "Get Started for Free Trail Now",
      bgColor: "bg-[##FF9A26]",
      btnColor: "bg-[#FF9A26]",  // Orange button color for the Premium plan
      titleBgColor: "bg-[#F4F7FA]",
      textColor: "text-[#0066CC]"
    }
  ];

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
    <div className=" py-24 xs:py-4 xs:bg-[#04324D]  " style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'

    }}>
      <div className="text-center mb-12 xs:bg-[#04324D]">
        <h1 className="font-bold text-[40px]  text-white xs:pt-4 inter_ff">Pricing & Plans</h1>
        <p className="text-[#ffffff] opacity-50 mt-4 xs:px-2 text-[17] font-normal inter_ff">
          With lots of unique blocks, you can easily build a page without coding. Build
          <br />
          your next landing page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:px-[2%] w-full gap-8 xs:px-2 px-[10%]">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-2xl pb-4 px-2  text-center mx-auto max-w-xs">
            <div className="mb-6">
              <p className={`${plan.textColor} ${plan.titleBgColor} xs:mt-2 xs:px-2 px-10 mt-2 py-2 rounded-full inline-block`}>{plan.title}</p>
            </div>
            <p className="text-5xl font-bold inter_ff mb-4">{plan.price}</p>
            <p className="text-[#5C606C] font-bold mb-4">{plan.frequency}</p>
            <p className="text-[#5C606C] mb-8">
              {plan.description}
            </p>
            <p>
              <button onClick={handleOpenForm} className={`text-white ${plan.btnColor} text-nowrap px-8 py-2 font-bold rounded-full`}>
                {plan.buttonText}
              </button>
            </p>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
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
    </div>
  );
};

export default Pricing;













// import React, { useState } from 'react';
// import bgimg from "../../assets/images/bgimg.png";

// const Pricing = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   const pricingPlans = [
//     {
//       title: "Basic",
//       price: "$29",
//       frequency: "One time purchase",
//       description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
//       buttonText: "Get Started for Free",
//       bgColor: "bg-[#F4F7FA]",
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#008CD2]",
//       btnColor: "bg-sky-600"  // Default button color for other plans
//     },
//     {
//       title: "Standard",
//       price: "$59",
//       frequency: "Monthly subscription",
//       description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
//       buttonText: "Get Started for Free",
//       bgColor: "bg-[#E8F0FE]",
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#0066CC]",
//       btnColor: "bg-sky-600"  // Default button color for other plans
//     },
//     {
//       title: "Premium",
//       price: "$99",
//       frequency: "Annual subscription",
//       description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
//       buttonText: "Get Started Free Trail Now",
//       bgColor: "bg-[##FF9A26]",
//       btnColor: "bg-[#FF9A26]",  // Orange button color for the Premium plan
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#0066CC]"
//     }
//   ];

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
//     <div className="py-24" style={{
//       backgroundImage: `url(${bgimg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//       <div className="container max-w-[1400px] w-full mx-auto">
//       <div className=" text-center mb-12 pt-12">
//         <h1 className="font-bold text-[40px] text-white inter_ff ">Pricing & Plans</h1>
//         <p className="text-[#ffffff] opacity-70 mt-4 text-[17px] font-normal inter_ff">
//           With lots of unique blocks, you can easily build a page without coding. Build
//           <br />
//           your next landing page.
//         </p>
//       </div>
// <div className=' '>


//       <div className=" grid grid-rows-1 md:flex md:flex-col items-center gap-12">
//         {pricingPlans.map((plan, index) => (
//           <div key={index} className="bg-white h-full rounded-lg px-10 py-7 text-center w-full sm:w-[50%] md:max-w-[33%]">
//             <div className="mb-6">
//               <p className={`${plan.textColor} ${plan.titleBgColor}  font-bold px-10 py-2 mt-4 rounded-full inline-block`}>{plan.title}</p>
//             </div>
//             <p className="text-5xl font-bold inter_ff mb-4 pt-3">{plan.price}</p>
//             <p className="text-[#5C606C]  inter_ff  font-bold mb-4">{plan.frequency}</p>
//             <p className="text-[#5C606C] text-[17] font-normal inter_ff mb-8 pt-10">
//               {plan.description}
//             </p>
          
//               <button onClick={handleOpenForm} className={`text-white ${plan.btnColor} mt-7 text-nowrap w-full px-8 py-2 font-bold rounded-full`}>
//                 {plan.buttonText}
//               </button>
           
//           </div>
//         ))}
//       </div>
//       </div>
//       {isFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
//             <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
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
//       </div>
//     </div>
//   );
// };

// export default Pricing;
