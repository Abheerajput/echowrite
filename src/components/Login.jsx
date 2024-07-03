import React from 'react';
import { FcGoogle } from "react-icons/fc";
import bgimg from "../assets/images/loginbgimg.png";
import logo from "../assets/svg/logo.svg";
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <div className="xs:flex bg-white  shadow-lg rounded-lg flex min-h-screen   lg:flex  lg:w-full lg:flrx lg:flex-row lg:justify-between  md:flex md:flex- sm:flex sm:flex-col-reverse xs:flex-col-reverse overflow-hidden w-full max-w-4xl">
      <div className="w-full p-8 flex flex-col justify-center">
        <div className="flex justify-between xs:flex-col xs:justify-center items-center mb-4">
          <img src={logo} alt="EchoWrite Logo" className="w-32" />
          <Link to="/signup" className="text-sm">
            Don't have an account? <span className="font-semibold text-blue-600">Sign up!</span>
          </Link>
        </div>
        <h2 className="text-3xl font-semibold mb-4 flex justify-center mt-[23%]">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-8 flex justify-center mt-[-3%]">Login into your account</p>
        <div className="flex justify-center">
          <form className="w-2/3">
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
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="flex items-center justify-between xs:flex-col xs:justify-center xs:gap-3 mb-4">
              <label className="flex items-center ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700 text-sm">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-blue-600">Recover Password</Link>
            </div>
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Log In
            </button>
            <div className="text-center text-gray-500 my-4">Or continue with</div>
            <button
              className="bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg w-full flex items-center justify-center"
              type="button"
            >
               <FcGoogle className="mr-2 h-[16px] w-[16px]" />
              Continue with Google
            </button>
              {/* <button className="bg-white  border text-[10px]  font-medium inter_ff py-2 px-4 rounded-full flex items-center">
               Continue with Google
              </button> */}
          </form>
        </div>
      </div>

      <div className="lg:bg-cover lg:bg-center lg:relative"
       style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="mb-8 pl-[70px] xs:pl-4 pt-[23%]">
           
          
          </div>
        <div className="flex pt-[1%] pl-[50px] xs:pl-4 p-8">
          <div className=" bg-opacity-70  backdrop-blur-xl p-4 w-1/2 xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/4 rounded-xl">
            <p className=" text-white mb-2 text-[20px] font-normal inter_ff">Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
          </div>
        </div>
    
      
      </div>
      {/* <div className="w-full h-full bg-cover flex flex-col justify-center" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="flex items-end justify-center h-full">
          <div className="text-white backdrop-blur-xl mb-[8%] p-8">
            <h2 className="text-2xl font-semibold mb-4">Top Notch Stock Resources</h2>
            <p>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
          </div>
        </div>
      </div> */}

    </div>
  </div>
);

export default Login;

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
