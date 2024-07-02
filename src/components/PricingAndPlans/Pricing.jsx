import React, { useState } from 'react';

const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const pricingPlans = [
    {
      title: "Basic",
      price: "$29",
      frequency: "One time purchase",
      description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      buttonText: "Get Started Free",
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
      buttonText: "Get Started Free",
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
      buttonText: "Get Started Free Trail Now",
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
    <div className="bg-[#04324D] py-24 mt-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-5xl text-white inter_ff">Pricing & Plans</h1>
        <p className="text-[#ffffff] opacity-50 mt-4">
          With lots of unique blocks, you can easily build a page without coding. Build
          <br />
          your next landing page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%]">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 text-center mx-auto max-w-xs">
            <div className="mb-6">
              <p className={`${plan.textColor} ${plan.titleBgColor} px-10 py-2 rounded-full inline-block`}>{plan.title}</p>
            </div>
            <p className="text-5xl font-bold inter_ff mb-4">{plan.price}</p>
            <p className="text-[#5C606C] font-bold mb-4">{plan.frequency}</p>
            <p className="text-[#5C606C] mb-8">
              {plan.description}
            </p>
            <p>
              <button onClick={handleOpenForm} className={`text-white ${plan.btnColor} px-8 py-2 font-bold rounded-full`}>
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


// import React from 'react';

// const Pricing = () => {
//   const pricingPlans = [
//     {
//       title: "Basic",
//       price: "$29",
//       frequency: "One time purchase",
//       description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
//       buttonText: "Get Started Free",
//       bgColor: "bg-[#F4F7FA]",
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#008CD2]"
//     },
//     {
//       title: "Standard",
//       price: "$59",
//       frequency: "Monthly subscription",
//       description: "With lots of unique blocks, you can  easily build a page without coding. Build your next landing page.",
//       buttonText: "Get Started Free",
//       bgColor: "bg-[#E8F0FE]",
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#0066CC]"
//     },
//     {
//       title: "Premium",
//       price: "$99",
//       frequency: "Annual subscription",
//       description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",

//       buttonText: "Get Started Free Trail Now",
//       bgColor: "bg-[#FF9A26]",
//       btnColor: "bg-[#FF9A26]",
//       titleBgColor: "bg-[#F4F7FA]",
//       textColor: "text-[#0066CC]"
//     }
//   ];

//   return (
//     <div className="bg-[#04324D] py-24 mt-12 md:py-32 lg:py-40">
//       <div className="text-center mb-12 md:mb-16 lg:mb-20">
//         <h1 className="font-bold text-5xl text-white inter_ff md:text-6xl lg:text-7xl">Pricing & Plans</h1>
//         <p className="text-[#ffffff] opacity-50 mt-4 md:mt-6 lg:mt-8">
//           With lots of unique blocks, you can easily build a page without coding. Build
//           <br />
//           your next landing page.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%] md:px-[15%] lg:px-[20%]">
//         {pricingPlans.map((plan, index) => (
//           <div key={index} className="bg-white rounded-2xl p-8 text-center mx-auto max-w-xs md:max-w-md lg:max-w-lg">
//             <div className="mb-6">
//               <p className={`${plan.textColor} ${plan.titleBgColor} px-10 py-2  rounded-full inline-block`}>{plan.title}</p>
//             </div>
//             <p className="text-5xl font-bold inter_ff mb-4 md:text-6xl lg:text-7xl">{plan.price}</p>
//             <p className="text-[#5C606C] font-bold mb-4">{plan.frequency}</p>
//             <p className="text-[#5C606C] mb-8">
//               {plan.description}
//             </p>
//             <p>
//               <button className={`text-white ${plan.btnColor} bg-sky-600 px-8 py-2 font-bold rounded-full text-nowrap`}>
//                 {plan.buttonText}
//               </button>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;




// import React from 'react'

// const Pricing = () => {
//   return (
//     <>
//       <div className="grid grid-rows-1 mt-[6rem ] bg-[#04324D] pb-[28%] mb-[-24%]  ">
//         <div >
//           <p className='font-bold text-5xl flex   justify-center pt-[70px] inter_ff'>Pricing & Plans</p>
//           <p className='flex justify-center text-[#ffffff] opacity-50 pt-[1%]'>  With lots of unique blocks, you can easily build  a page without coding. Build <br /> your next landing page.</p>
//         </div>



//         <div className="grid mt-[5%] grid-cols-4 justify-center">


//           <div className=" bg-white  ml-[9%] rounded-2xl ">

//             <title className='flex justify-center pt-[5%] '>
//               <p className='text-[#008CD2] bg-[#F4F7FA] px-10 py-2 rounded-full'>Basic</p></title>

//             <p className='flex justify-center text-5xl font-bold inter_ff pt-[5%]'>$29</p>
//             <p className='text-[#5C606C] font-bold flex justify-center pt-[2%]'>One time purchase</p>
//             <p className='text-[#5C606C] flex justify-center pt-[8%]'>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
//             <span className='flex justify-center py-[5%]'>
//               <button className='text-white  bg-sky-600 flex justify-center items-center px-8 py-2 font-bold rounded-full '>Leran how We Walk</button>
//             </span>

//           </div>
//           <div className=" bg-white  ml-[9%] rounded-2xl ">
//             <title className='flex justify-center pt-[5%] '>
//               <p className='text-[#008CD2] bg-[#F4F7FA] px-10 py-2 rounded-full'>Basic</p></title>

//             <p className='flex justify-center text-5xl font-bold inter_ff pt-[5%]'>$29</p>
//             <p className='text-[#5C606C] font-bold flex justify-center pt-[2%]'>One time purchase</p>
//             <p className='text-[#5C606C] flex justify-center pt-[8%]'>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
//             <span className='flex justify-center py-[5%]'>
//               <button className='text-white  bg-sky-600 flex justify-center items-center px-8 py-2 font-bold rounded-full '>Leran how We Walk</button>
//             </span>

//           </div>
//           <div className=" bg-white  ml-[9%] rounded-2xl ">
//             <title className='flex justify-center pt-[5%] '>
//               <p className='text-[#008CD2] bg-[#F4F7FA] px-10 py-2 rounded-full'>Basic</p></title>

//             <p className='flex justify-center text-5xl font-bold inter_ff pt-[5%]'>$29</p>
//             <p className='text-[#5C606C] font-bold flex justify-center pt-[2%]'>One time purchase</p>
//             <p className='text-[#5C606C] flex justify-center pt-[8%]'>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
//             <span className='flex justify-center py-[5%]'>
//               <button className='text-white  bg-sky-600 flex justify-center items-center px-8 py-2 font-bold rounded-full '>Leran how We Walk</button>
//             </span>

//           </div>
//         </div>

//       </div>








//     </>

//   )
// }

// export default Pricing
