import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/svg/logo.svg";

import {  Link } from 'react-router-dom';
// import login from "../Login.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const token = localStorage.getItem('authToken');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTrialForm = () => {
    setIsTrialFormOpen(!isTrialFormOpen);
  };

  const handleTrialFormSubmit = (event) => {
    event.preventDefault();
    setIsTrialFormOpen(false);
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
    }, 3000); 
  };

  return (
    <div className="relative bg-white">
      <div className='bg-[#04324D] flex justify-center items-center text-white text-[15px] font-bold py-2'>
        <h1>🎙 Welcome to EchoWrite</h1>
      </div>
      <div className="container max-w-[1400px] w-full mx-auto px-3">
        <div className="flex py-3 justify-between items-center w-full">
          <img src={logo} alt="Logo" />
          <div className="hidden  xs:flex sm:flex ">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="xs:hidden sm:hidden flex items-center gap-5">
            <Link to="/features" className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</Link>
            <Link to="/user" className="text-[15px] text-[#161C2D] font-medium inter_ff">About Us</Link>
            {/* <Link className="text-[15px] text-[#161C2D] font-medium inter_ff"><a href="#faq">FAQs</a></Link> */}
            <Link to="/faq" className="text-[15px] text-[#161C2D] font-medium inter_ff">Faq</Link>
            <a className="text-[15px] text-[#161C2D] font-medium inter_ff" href="#contact">Contact</a>
            {/* <Link to="/contact" className="text-[15px] text-[#161C2D] font-medium inter_ff">Contact</Link> */}
          </div>
          <div className="xs:hidden md:flex lg:flex xl:flex  sm:hidden flex gap-4 items-center">
            <p>
{
            token && token !== undefined && token !== null ?  
          <Link></Link>:
          <Link to="/login" className="text-[15px] text-[#161C2D] font-medium inter_ff">Login</Link>
}         
            </p>
         
           {
             token && token !== undefined && token !== null ?  
             <Link to="/dashboard3">  <button className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] font-medium inter_ff text-white">Start Free Trial</button></Link>:
             <Link to="/dashboard3">    <button  className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] text-white font-medium inter_ff">Start Free Trial</button></Link>
           }

           
            
          </div>
        </div> 

        {isMenuOpen && (
          <div className="flex flex-col items-center gap-4 p-4 lg:hidden xl:hidden  md:hidden">
            <Link to="/user" className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</Link>
            <Link to="/dashboard" className="text-[15px] text-[#161C2D] font-medium inter_ff">Dashboard</Link>
            <Link to="/faq" className="text-[15px] text-[#161C2D] font-medium inter_ff">Faq</Link>

          
            <a className="text-[15px] text-[#161C2D] font-medium inter_ff" href="#contact">Contact</a>
            {
            token && token !== undefined && token !== null ?  
          <Link></Link>:
          <Link to="/login" className="text-[15px] text-[#161C2D] font-medium inter_ff">Login</Link>
}    
        

            {
             token && token !== undefined && token !== null ?  
             <Link to="/dashboard3">  <button className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] font-medium inter_ff text-white">Start Free Trial</button></Link>:
             <Link to="/dashboard3">    <button  className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] text-white font-medium inter_ff">Start Free Trial</button></Link>
           }

          </div>
        )}

        {isTrialFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[40%] lg:w-[30%]">
              <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
              <form onSubmit={handleTrialFormSubmit}>
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
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="text-sm text-gray-500 underline"
                    type="button"
                    onClick={toggleTrialForm}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {isSuccessMessageVisible && (
          <div className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-green-500 w-1/3 text-white py-2 px-4 rounded-lg shadow-lg text-center">
            Successfully Submitted!
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../../assets/svg/logo.svg";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from "../Login.jsx";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleTrialForm = () => {
//     setIsTrialFormOpen(!isTrialFormOpen);
//   };

//   const handleTrialFormSubmit = (event) => {
//     event.preventDefault();
//     setIsTrialFormOpen(false);
//     setIsSuccessMessageVisible(true);
//     setTimeout(() => {
//       setIsSuccessMessageVisible(false);
//     }, 3000); 
//   };

//   return (
//     <div className="relative bg-white">
//       <div className='bg-[#04324D] flex justify-center items-center text-white text-[15px] font-bold py-2'>
//   <h1>🎙 Welcome to EchoWrite</h1>
// </div>
//       <div className="container max-w-[1400px] w-full mx-auto px-3">


//        <div className="flex py-3 justify-between items-center w-full">
//           <img src={logo} alt="Logo"  />
//         <div className="md:hidden ">
//           <button onClick={toggleMenu} className="text-2xl focus:outline-none">
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         <div className="flex items-center gap-5">  <Link to="/features" className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</Link>
//           <Link to="/dashboard" className="text-[15px] text-[#161C2D] font-medium inter_ff">Dashboard</Link>
//           <Link to="/faqs" className="text-[15px] text-[#161C2D] font-medium inter_ff">FAQs</Link>
//           <Link to="/contact" className="text-[15px] text-[#161C2D] font-medium inter_ff">Contact</Link></div>
//         <div className="hidden md:flex gap-4 items-center ">
//           <div className='flex items-center gap-4'>
//           <Link to="/login" className="text-[15px] text-[#161C2D] font-medium inter_ff">Login</Link>
//           <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] font-medium inter_ff text-white ">Start Free Trial</button>
//         </div>
//         </div></div> 
       
     
//       {isMenuOpen && (
//         <div className="md:hidden sm:hidden xs:hidden flex flex-col items-center gap-4 p-4">
//           <Link to="/features" className="text-sm text-[#161C2D] font-medium">Features</Link>
//           <Link to="/dashboard" className="text-sm text-[#161C2D] font-medium">Dashboard</Link>
//           <Link to="/faqs" className="text-sm text-[#161C2D] font-medium">FAQs</Link>
//           <Link to="/contact" className="text-sm text-[#161C2D] font-medium">Contact</Link>
//           <Link to="/login" className="text-sm text-[#161C2D] font-medium">Login</Link>
//           <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-sm text-white font-medium">Start Free Trial</button>
//         </div>
//       )}
//       {isTrialFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[40%] lg:w-[30%]">
//             <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
//             <form onSubmit={handleTrialFormSubmit}>
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
//               <div className="flex items-center justify-center mt-4">
//                 <button
//                   className="text-sm text-gray-500 underline"
//                   type="button"
//                   onClick={toggleTrialForm}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {isSuccessMessageVisible && (
//         <div className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-green-500 w-1/3 text-white py-2 px-4 rounded-lg shadow-lg text-center">
//           Successfully Submitted!
//         </div>
//       )}
//        </div>
//     </div>
//   );
// };

// export default Navbar;








// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../../assets/svg/logo.svg";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from "../Login.jsx"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleTrialForm = () => {
//     setIsTrialFormOpen(!isTrialFormOpen);
//   };

//   const handleTrialFormSubmit = (event) => {
//     event.preventDefault();
//     setIsTrialFormOpen(false);
//     setIsSuccessMessageVisible(true);
//     setTimeout(() => {
//       setIsSuccessMessageVisible(false);
//     }, 3000); 
//   };

//   return (
//     <div className="relative bg-white">
//       <div className=" flex justify-between items-center py-5 px-4 md:px-8">
//         <div className="flex items-center gap-4 ml-2 md:ml-8">
//           <img src={logo} alt="Logo" className="" />
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl focus:outline-none">
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         <div className="hidden md:flex gap-4 items-center">
//           <Link to="/features" className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</Link>
//           <Link to="/dashboard" className="text-[15px] text-[#161C2D] font-medium inter_ff">Dashboard</Link>
//           <Link to="/faqs" className="text-[15px] text-[#161C2D] font-medium inter_ff">FAQs</Link>
//           <Link to="/contact" className="text-[15px] text-[#161C2D] font-medium inter_ff">Contact</Link>

     
//         </div>
//         <div className='flex gap-4'>
//         <Link to="/login" className="text-[15px] text-[#161C2D] font-medium inter_ff">Login</Link>
//         <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px]  font-medium inter_ff text-white ">Start Free Trial</button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 p-4">
//           <Link to="/features" className="text-sm text-[#161C2D] font-medium">Features</Link>
//           <Link to="/dashboard" className="text-sm text-[#161C2D] font-medium">Dashboard</Link>
//           <Link to="/faqs" className="text-sm text-[#161C2D] font-medium">FAQs</Link>
//           <Link to="/contact" className="text-sm text-[#161C2D] font-medium">Contact</Link>
//           <Link to="/login" className="text-sm text-[#161C2D] font-medium">Login</Link>
//           <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-sm text-white font-medium">Start Free Trial</button>
//         </div>
//       )}
//       {isTrialFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[40%] lg:w-[30%]">
//             <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
//             <form onSubmit={handleTrialFormSubmit}>
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
//               <div className="flex items-center justify-center mt-4">
//                 <button
//                   className="text-sm text-gray-500 underline"
//                   type="button"
//                   onClick={toggleTrialForm}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {isSuccessMessageVisible && (
//         <div className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-green-500 w-1/3 text-white py-2 px-4 rounded-lg shadow-lg text-center">
//           Successfully Submitted!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;












// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../../assets/svg/logo.svg";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from "../Login.jsx"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleTrialForm = () => {
//     setIsTrialFormOpen(!isTrialFormOpen);
//   };

//   const handleTrialFormSubmit = (event) => {
//     event.preventDefault();
//     setIsTrialFormOpen(false);
//     setIsSuccessMessageVisible(true);
//     setTimeout(() => {
//       setIsSuccessMessageVisible(false);
//     }, 3000); 
//   };

//   return (
//     <div className="relative  bg-white ">
//       <div className="flex justify-between items-center py-5 px-4 md:px-8">
//         <div className="flex items-center gap-4 ml-[60px] xs:ml-2">
//           <img src={logo} alt="Logo" />
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl focus:outline-none xs:mt-[20px]">
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         <div className="hidden md:flex ml-[-12%] gap-4 pt-2">
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</p>
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff"></p>
//          <p> <Link to="/Dashboard" className='text-[15px] text-[#161C2D] font-medium inter_ff pt-2'>Dashboard</Link></p>
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff">FAQs</p>
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff">Contact</p>
//         </div>
//         <div className="hidden md:flex items-center gap-5">
//           <Link to="/login" className='text-[15px] text-[#161C2D] font-medium inter_ff pt-2'>Login</Link>
//           <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] text-[white] font-medium inter_ff">Start Free Trial</button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 p ">
//     <p className="text-[15px] text-[#161C2D] font-medium inter_ff">Features</p>
//          <p> <Link to="/Dashboard" className='text-[15px] text-[#161C2D] font-medium inter_ff pt-2'>Dashboard</Link></p>
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff">FAQs</p>
//           <p className="text-[15px] text-[#161C2D] font-medium inter_ff">Contact</p>
//           <div className="flex flex-col items-center gap-5">
//             <Link to="/login" className='text-[15px] text-[#161C2D] font-medium inter_ff'>Login</Link>
//             <button onClick={toggleTrialForm} className="px-4 py-2 bg-[#FFB531] rounded-3xl text-[15px] text-[white] font-medium inter_ff">Start Free Trial</button>
//           </div>
//         </div>
//       )}
//       {isTrialFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[40%] lg:w-[30%]">
//             <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
//             <form onSubmit={handleTrialFormSubmit}>
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
//               <div className="flex items-center justify-center mt-4">
//                 <button
//                   className="text-sm text-gray-500 underline"
//                   type="button"
//                   onClick={toggleTrialForm}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {isSuccessMessageVisible && (
//         <div className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-green-500 w-1/3 text-white py-2 px-4 rounded-lg shadow-lg">
//           Successfully Submitted!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




// // import React from 'react'
// // import logo from "../../assets/svg/logo.svg"
// // const Navbar = () => {
// //   return (
    
// //    <div class="grid grid-cols-3 gap-4 my-5 ">
// //   <div className='flex  items-center pl-[5rem] gap-4 gap-sm-1'>
// //     <img src={logo} alt="Logo"  />
// //     <p className='flex text-[23px] libre_ff font-bold '>ECHO 
// //       <p className='text-[23px] libre_ff text-[#008CD2] font-bold'>WRITE</p>
// //     </p>
// //   </div>
// //   <div className='flex justify-evenly items-center '>
// //     <p className='text-[15px] font-medium inter_ff'>Features  </p>
// //     <p className='text-[15px] font-medium inter_ff'>About Us</p>
// //     <p className='text-[15px] font-medium inter_ff'>  FAQs  </p>
// //     <p className='text-[15px] font-medium inter_ff'>Contact</p>
// //   </div>
// //   <div className='flex items-center justify-end gap-5  pr-[5rem] '>
// //     <p>Lgin</p>
// //     <button className='px-[6%] py-[2%] bg-[#FFB531] rounded-3xl'>Start free tarils</button>
// //   </div>
// // </div>
// //   )
// // }

// // export default Navbar
