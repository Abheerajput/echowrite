

import React, { useState } from 'react';

const Ready = () => {
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
    // Simulate successful submission
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
      handleCloseForm();
    }, 3000); // Hide success message after 3 seconds
  };

  return (
    <div className=" bg-[#04324D] p-8 lg:p-16">
      <div className="container max-w-[1400px] w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="  md:py-8  xs:py-2 lg:py-[10%]">
        <h1 className="text-[40px]  font-bold inter_ff text-white">
          Ready to launch your next project?
        </h1>
        <p className="text-[18px] inter_ff text-[#A7B7C1] font-normal mt-4">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <button onClick={handleOpenForm} className="text-white bg-[#FF9A26] rounded-3xl font-semibold inter_ff px-8 lg:px-12 py-3 lg:py-4">
          Get started a project
        </button>
      </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Start Your Project</h2>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border rounded-lg w-full py-2 px-3 text-gray-700 h-24"
                  id="message"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#FF9A26] text-white font-bold py-2 px-4 rounded-3xl w-full"
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
    </div>
  );
};

export default Ready;


// import React from 'react'

// const Ready = () => {
//   return (
//     <div class="grid grid-cols-2 gap-4 bg-[#04324D]">
//     <div className='pl-[18%] py-[10%]'>
        
//         <h1 className='text-[40px] font-bold inter_ff  text-white'>Ready to launch your next project?</h1>
//         <p className='text-[18px] text-[#A7B7C1]  font-normal'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
//     </div>
//    <div className='flex justify-center items-center pl-[21%]'>

//     <div>
//         <button className='text-white bg-[#FF9A26]  rounded-3xl px-12 py-4 '>Get started a project</button>
//     </div>
//    </div>
//   </div>
//   )
// }

// export default Ready
