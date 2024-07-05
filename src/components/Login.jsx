import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import bgimg from "../assets/images/loginbgimg.png";
import { Link } from 'react-router-dom';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-12 h-6 xs:h-4 xs:w-11 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? "bg-blue-600" : ""}`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white xs:w-3 xs:h-3 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""}`}
      ></div>
    </div>
  );
};

const Login = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleToggle = () => {
    setIsRememberMe(!isRememberMe);
  };

  return (
    <div className="flex min-h-screen xs:grid md:grid sm:grid lg:flex lg:w-full xs:h-screen">
      {/* Left section */}
      <div className="flex-1 lg:bg-cover lg:bg-center lg:relative xs:h-[50vh]"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="flex items-center justify-center lg:mt-[40%] w-2/3 xs:w-1/2 xs:hidden">
          <div className="text-white backdrop-blur-xl lg:mt-[70%] lg:ml-[4%] xs:m-0 xs:p-2 xs:mt-4 p-8">
            <h2 className="text-2xl font-semibold mb-4 xs:text-[9px]">Top Notch Stock Resources</h2>
            <p className='xs:text-[9px]'>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 xs:w-full md:w-full lg:w-1/2 p-8">
        <div className="flex justify-between items-center mb-4">
          <Link to="/signup" className="text-sm">Don't have an account? <span className="font-semibold text-blue-600">Sign up!</span></Link>
        </div>
        <h2 className="text-[30px] inter_ff font-semibold mb-4 flex justify-center mt-[23%]">Welcome Back</h2>
        <p className="text-[15px] inter_ff text-[#000000] mb-8 flex justify-center mt-[-3%]">Login into your account</p>
        <div className='flex justify-center'>
          <form className='w-2/3'>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4 xs:flex xs:flex-col">
              <label className="flex items-center">
                <ToggleSwitch isOn={isRememberMe} handleToggle={handleToggle} />
                <span className="ml-2 text-[#1A1A1A] font-normal text-[10px] text-nowrap">Remember me</span>
              </label>
              <Link to="#" className="text-[11px] text-[#D93F21] inter_ff text-nowrap">Recover Password</Link>
            </div>
            <button
              className="bg-blue-600 text-[15px] font-normal inter_ff text-white py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Log In
            </button>
            <div className="text-center text-gray-500 my-4">Or continue with</div>
            <button
              className="bg-white text-[#00000] text-[10px] inter_ff border border-gray-300 py-2 px-4 rounded-lg text-nowrap w-full flex items-center justify-center"
              type="button"
            >
              <FcGoogle className="mr-2 h-[16px] w-[16px] xs:flex" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import { FcGoogle } from "react-icons/fc";
// import bgimg from "../assets/images/loginbgimg.png";
// import { Link } from 'react-router-dom';

// const Login = () => (




//     <div className="flex  min-h-screen xs:grid md:grid sm:grid  lg:flex  lg:w-full xs:h-screen">
//     {/* Left section */}
//     <div className="flex-1  lg:bg-cover lg:bg-center lg:relative xs:h-[50vh]"
//      style={{
//       backgroundImage: `url(${bgimg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//             <div className="flex items-center justify-center lg:mt-[40%] w-2/3  xs:w-1/2 xs:hidden ">
//            <div className="text-white backdrop-blur-xl  lg:mt-[70%] lg:ml-[4%] xs:m-0  xs:p-2 xs:mt-4 p-8">
//              <h2 className="text-2xl font-semibold mb-4   xs:text-[9px]">Top Notch Stock Resources</h2>
//              <p className='xs:text-[9px]'>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
//            </div>
//          </div>
       
    
    
//     </div>
   
//     {/* Right section */}
//     <div className="w-1/2 xs:w-full md:w-full  lg:w-1/2 p-8">
//         <div className="flex justify-between items-center mb-4">

//           <Link to="/signup" className="text-sm ">Don't have an account? <span className="font-semibold text-blue-600">Sign up!</span></Link>
//         </div>
//         <h2 className="text-[30px] inter_ff font-semibold mb-4 flex justify-center mt-[23%]">Welcome Back</h2>
//         <p className="text-[15px] inter_ff text-[#000000] mb-8 flex justify-center mt-[-3%]"  >Login into your account</p>
//         <div className='flex justify-center'>
//         <form className='w-2/3'>
//           <div className="mb-4">
           
//             <input
//               className="border rounded-lg w-full py-2 px-3 text-gray-700"
//               id="email"
//               type="email"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               className="border rounded-lg w-full py-2 px-3 text-gray-700"
//               id="password"
//               type="password"
//               placeholder="Your Password"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between mb-4 xs:flex xs:flex-col">
//             <label className="flex items-center">
//               <input type="checkbox" className="form-checkbox" />
//               <span className="ml-2 text-[#1A1A1A] font-normal text-[10px] text-nowrap">Remember me</span>
//             </label>
//             <Link href="#" className="text-[11px] text-[#D93F21] inter_ff  text-nowrap">Recover Password</Link>
//           </div>
//           <button
//             className="bg-blue-600text-[15px] font-normal inter_ff text-white  py-2 px-4 rounded-lg w-full"
//             type="submit"
//           >
//             Log In
//           </button>
//           <div className="text-center text-gray-500 my-4">Or continue with</div>
//           <button
//             className="bg-white text-[#00000] text-[10px] inter_ff border border-gray-300 py-2 px-4 rounded-lg text-nowrap w-full flex items-center justify-center"
//             type="button"
//           >
//             <FcGoogle className="mr-2 h-[16px] w-[16px] xs:flex" />
//             Continue with Google
//           </button>
//         </form>
//         </div>
      
//       </div>

//   </div>

 
// );

// export default Login;















// import React from 'react';
// import bgimg from "../assets/images/loginbgimg.png"
// import logo from "../assets/svg/logo.svg"
// import { Link } from 'react-router-dom';
// const Login = () => (

//   <div>
//     <div className="xs:flex bg-white  min-h-screen shadow-lg rounded-lg md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse xs:flex-col-reverse overflow-hidden w-full max-w-4xl ">
//       <div className="w-full p-8">
//         <div className="flex justify-between items-center mb-4">
//           <img src={logo} alt="EchoWrite Logo" className="w-32" />
//           <Link to="/signup" className="text-sm ">Don't have an account? <span className="font-semibold text-blue-600">Sign up!</span></Link>
//         </div>
//         <h2 className="text-3xl font-semibold mb-4 flex justify-center mt-[23%]">Welcome Back</h2>
//         <p className="text-sm text-gray-600 mb-8 flex justify-center mt-[-3%]"  >Login into your account</p>
//         <div className='flex justify-center'>
//         <form className='w-2/3'>
//           <div className="mb-4">
           
//             <input
//               className="border rounded-lg w-full py-2 px-3 text-gray-700"
//               id="email"
//               type="email"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="border rounded-lg w-full py-2 px-3 text-gray-700"
//               id="password"
//               type="password"
//               placeholder="Your Password"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between mb-4">
//             <label className="flex items-center">
//               <input type="checkbox" className="form-checkbox" />
//               <span className="ml-2 text-gray-700 text-sm">Remember me</span>
//             </label>
//             <Link href="#" className="text-sm text-blue-600">Recover Password</Link>
//           </div>
//           <button
//             className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
//             type="submit"
//           >
//             Log In
//           </button>
//           <div className="text-center text-gray-500 my-4">Or continue with</div>
//           <button
//             className="bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg w-full flex items-center justify-center"
//             type="button"
//           >
//             <img src="/path/to/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
//             Continue with Google
//           </button>
//         </form>
//         </div>
      
//       </div>
//       <div className=" w-full h-full bg-cover" style={{
//         backgroundImage: `url(${bgimg})`,
//        backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}>
//         <div className="flex items-end justify-center h-full  ">
//           <div className="text-white backdrop-blur-xl mb-[8%] p-8">
//             <h2 className="text-2xl font-semibold mb-4">Top Notch Stock Resources</h2>
//             <p>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Login;
