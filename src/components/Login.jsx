import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import bgimg from "../assets/images/loginbgimg.png";
import thumbicon from "../assets/svg/thumbicon.svg";
import bgcircle from "../assets/images/logincircle.png";
import logo from "../assets/svg/logo.svg";
import loginicon from "../assets/svg/signinicon3.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../config";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-12 h-6 xs:h-4 xs:w-11 flex items-center rounded-full p-1 cursor-pointer ${isOn ? "bg-[#008CD2]" : "bg-gray-300 "}`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white xs:w-3 xs:h-3 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""}`}
      ></div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleToggle = () => {
    setIsRememberMe(!isRememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email: user.email,
        password: user.password,
      });

      if (response.data?.status === "success") {
        toast.success(response?.data?.msg || 'Login successfully!');
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
      } else {
        toast.error(response?.data?.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    setLoadingGoogle(true); 

    try {
      const response = await axios.post(`${BASE_URL}/api/googlesignin`, {
        email: user.email,
        password: user.password,
        credential: credentialResponse.credential,
      });

      if (response.data?.status === "success") {
        toast.success(response?.data?.msg || 'Login successfully!');
        localStorage.setItem('authToken', response.data.token);
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        console.error('Sign-in failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setLoadingGoogle(false); 
    }
  };

  return (
    <div className="flex min-h-screen xs:grid md:grid sm:grid lg:flex-row-reverse lg:flex lg:w-full xs:h-screen overflow-hidden">
      {/* Left section */}
      <div className="flex-1 lg:bg-cover lg:bg-center lg:flex sm:hidden xl:bg-cover xs:hidden lg:relative lg:h-screen"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
        }}>
        <div className="flex items-center justify-center h-screen relative rounded-lg w-2/3 xs:w-1/2 xs:hidden">
          <div className="text-white backdrop-blur-xl w-2/3 lg:mt-[70%] lg:ml-[4%] lg:w-4/5 xs:m-0 xs:p-2 xs:mt-4 p-8">
            <h2 className="text-[13px] font-normal inter_ff w-full py-3 lg:px-2 bg-[#008CD2] flex justify-center items-center text-nowrap rounded-3xl mb-4 xs:text-[9px]">
              <img src={thumbicon} alt="" className='xs:pr-0 pr-[12px]' />
              Top Notch Stock Resources
            </h2>
            <p className='xs:text-[9px] text-[20px] font-normal inter_ff text-white'>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
          </div>
        </div>
        <div className='absolute bottom-0 left-[-300px] z-[-1]'>
          <img src={bgcircle} alt="" />
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 xs:w-full md:w-full md:flex md:justify-start xs:flex xs:justify-start lg:justify-start lg:w-1/2 p-8 flex flex-col items-center justify-center overflow-y-auto">
        <div className="flex justify-between xs:flex xs:flex-col xs:items-center xs:justify-center lg:items-start items-center mb-4 w-full">
          <div className='pl-[32px] xl:pl-0 lg:pl-0 xs:pl-0 '>
            <img src={logo} alt="Logo" className="mb-8" />
          </div>
          <Link to="/signup" className="text-[11px] font-light inter_ff xs:hidden lg:pt-6 xl:pt-6">Don't have an account? <span className="font-medium text-[11px] inter_ff text-blue-600">Sign up!</span></Link>
        </div>
        <h2 className="text-[30px] inter_ff font-semibold mb-4 flex justify-center xs:mt-8 mt-16">Welcome Back</h2>
        <p className="text-[15px] inter_ff text-[#000000] mb-8 flex justify-center mt-[-3%]">Login into your account</p>
        <div className='flex justify-center w-full'>
          <form className='w-2/3 sm:w-2/3 lg:w-2/3 xs:w-full' onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4 xs:flex xs:flex-row">
              <label className="flex items-center">
                <ToggleSwitch isOn={isRememberMe} handleToggle={handleToggle} />
                <span className="ml-2 text-[#1A1A1A] font-normal text-[10px] text-nowrap">Remember me</span>
              </label>
              <Link to="#" className="text-[11px] text-[#D93F21] inter_ff text-nowrap">Recover Password</Link>
            </div>
            <button
              className="bg-[#008CD2] text-[15px] font-normal inter_ff text-white py-2 px-4 rounded-3xl w-full"
              type="submit"
              disabled={loading} 
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
            <div className="text-center my-4">
              <p><img className='h-[34px]' src={loginicon} alt="" /></p>
            </div>
            <div className='flex justify-center xs:w-full items-center'>
              <div className="flex justify-center">
                {loadingGoogle ? (
                  <p>Loading...</p>
                ) : (
                  <GoogleLogin
                    className="rounded-3xl"
                    onSuccess={handleSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    disabled={loadingGoogle} 
                  />
                )}
              </div>
            </div>
            <p className='xs:flex xs:justify-center xs:items-center'>
              <Link to="/signup" className="text-[11px] pt-3 font-light inter_ff xs:flex md:hidden lg:hidden xl:hidden xs:justify-center">Don't have an account? <span className="font-medium text-[11px] inter_ff text-blue-600">Sign up!</span></Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// // import { FcGoogle } from "react-icons/fc";
// import axios from 'axios';

// import { GoogleLogin } from '@react-oauth/google';
// import { Link, useNavigate } from 'react-router-dom';
// import bgimg from "../assets/images/loginbgimg.png";
// import thumbicon from "../assets/svg/thumbicon.svg";
// import bgcircle from "../assets/images/logincircle.png";
// import logo from "../assets/svg/logo.svg";
// import loginicon from "../assets/svg/signinicon3.svg";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BASE_URL} from "../config"

// const ToggleSwitch = ({ isOn, handleToggle }) => {
//   return (
//     <div
//       className={`w-12 h-6 xs:h-4 xs:w-11 flex items-center rounded-full p-1 cursor-pointer ${isOn ? "bg-[#008CD2]" : "bg-gray-300 "}`}
//       onClick={handleToggle}
//     >
//       <div
//         className={`bg-white xs:w-3 xs:h-3 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""}`}
//       ></div>
//     </div>
//   );
// };

// const Login = () => {
//   const navigate = useNavigate();
//   const [isRememberMe, setIsRememberMe] = useState(false);
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleToggle = () => {
//     setIsRememberMe(!isRememberMe);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {console.log("true")
     
//         const response = await axios.post(`${BASE_URL}/api/login`, {
//           email: user.email,
//           password: user.password,
//         });
// console.log(response)
//       if (response.data?.status === "success") {
//         toast.success(response?.data?.msg || 'Login  successfully!');
//         localStorage.setItem('authToken', response.data.token);
       
//           navigate('/home');
     
      
//       } 
//       else{
       
//         toast.error(response?.data?.msg || 'Login  failes'); 
//       }
    
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const handleSuccess = async (credentialResponse) => {
//     console.log(credentialResponse);
  
//     try {
//       const response = await axios.post(`${BASE_URL}/api/googlesignin`, {
//         email: user.email,
//         password: user.password,
//         credential: credentialResponse.credential,
//       });
//       if (response.data?.status === "success") {
//         toast.success(response?.data?.msg || 'Login  successfully!');
//         localStorage.setItem('authToken', response.data.token);
//        setTimeout(
//         () => {
//           navigate('/home');
//         },
//         3000
//        )
    
      
       
//       } else {
//         console.error('Sign-in failed:', response.data.error);
      
//       }
//     } catch (error) {
  
//     }
//   };
//   return (
//     <div className="flex min-h-screen xs:grid md:grid sm:grid lg:flex-row-reverse lg:flex lg:w-full xs:h-screen overflow-hidden">
//       {/* Left section */}
//       <div className="flex-1 lg:bg-cover lg:bg-center lg:flex sm:hidden xl:bg-cover xs:hidden lg:relative lg:h-screen"
//         style={{
//           backgroundImage: `url(${bgimg})`,
//           backgroundSize: 'cover',
//         }}>
//         <div className="flex items-center justify-center h-screen relative rounded-lg w-2/3 xs:w-1/2 xs:hidden">
//           <div className="text-white backdrop-blur-xl w-2/3 lg:mt-[70%] lg:ml-[4%] lg:w-4/5 xs:m-0 xs:p-2 xs:mt-4 p-8">
//             <h2 className="text-[13px] font-normal inter_ff w-full py-3 lg:px-2 bg-[#008CD2] flex justify-center items-center text-nowrap rounded-3xl mb-4 xs:text-[9px]">
//               <img src={thumbicon} alt="" className='xs:pr-0 pr-[12px]' />
//               Top Notch Stock Resources
//             </h2>
//             <p className='xs:text-[9px] text-[20px] font-normal inter_ff text-white'>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
//           </div>
       
//         </div>
//         <div className='absolute bottom-0 left-[-300px] z-[-1]' >
//           <img src={bgcircle} alt=""  />
//         </div>
//       </div>

//       {/* Right section */}
//       <div className="w-1/2 xs:w-full md:w-full md:flex md:justify-start xs:flex xs:justify-start lg:justify-start lg:w-1/2 p-8 flex flex-col items-center justify-center overflow-y-auto">
//         <div className="flex justify-between xs:flex xs:flex-col xs:items-center xs:justify-center lg:items-start items-center mb-4 w-full">
//           <div className='pl-[32px] xl:pl-0 lg:pl-0 xs:pl-0 '>
//             <img src={logo} alt="Logo" className="mb-8" />
//           </div>
//           <Link to="/signup" className="text-[11px] font-light inter_ff xs:hidden lg:pt-6 xl:pt-6">Don't have an account? <span className="font-medium text-[11px] inter_ff text-blue-600">Sign up!</span></Link>
//         </div>
//         <h2 className="text-[30px] inter_ff font-semibold mb-4 flex justify-center xs:mt-8 mt-16">Welcome Back</h2>
//         <p className="text-[15px] inter_ff text-[#000000] mb-8 flex justify-center mt-[-3%]">Login into your account</p>
//         <div className='flex justify-center w-full'>
//           <form className='w-2/3 sm:w-2/3 lg:w-2/3 xs:w-full' onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <input
//                 className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={user.email}
//                 onChange={handleInput}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 className="border rounded-lg w-full py-2 px-3 text-gray-700"
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="Your Password"
//                 value={user.password}
//                 onChange={handleInput}
//                 required
//               />
//             </div>
//             <div className="flex items-center justify-between mb-4 xs:flex xs:flex-row">
//               <label className="flex items-center">
//                 <ToggleSwitch isOn={isRememberMe} handleToggle={handleToggle} />
//                 <span className="ml-2 text-[#1A1A1A] font-normal text-[10px] text-nowrap">Remember me</span>
//               </label>
//               <Link to="#" className="text-[11px] text-[#D93F21] inter_ff text-nowrap">Recover Password</Link>
//             </div>
//             <button
//               className="bg-[#008CD2] text-[15px] font-normal inter_ff text-white py-2 px-4 rounded-3xl w-full"
//               type="submit"
//             >
//               Log In
//             </button>
//             <div className="text-center my-4">
//               <p><img className='h-[34px]' src={loginicon} alt="" /></p>
//             </div>
//             <p className='flex justify-center xs:w-full items-center'>
//               {/* <button
//                 className="bg-white  justify-center text-[#00000] text-[10px] w-1/2 xs:w-3/4 inter_ff border border-gray-300 xs:px-0 xs:mx-2 py-3 px-4 text-nowrap flex items-center"
//                 type="button"
//               >
//                 <FcGoogle className="xs:mr-2" style={{ width: '24px', height: '24px' }} />
//                 Continue with Google
//               </button> */}
//                <div className="flex  justify-center">
//               <GoogleLogin
//                 className="rounded-3xl"
//                 onSuccess={handleSuccess}
//                 onError={() => {
//                   console.log('Login Failed');
//                 }}
//               /></div>
//             </p>

//             <p className='xs:flex xs:justify-center xs:items-center'>
//               <Link to="/signup" className="text-[11px] pt-3 font-light inter_ff  xs:flex md:hidden lg:hidden xl:hidden xs:justify-center">Don't have an account? <span className="font-medium text-[11px] inter_ff text-blue-600">Sign up!</span></Link>
//             </p>
//           </form>
//         </div>
      
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Login;


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
