import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon3 from "../../assets/svg/otpheadlogo.svg";
import { useNavigate } from 'react-router-dom';
import signinimg from '../../assets/images/image.png';
import icon2 from '../../assets/svg/otpicon.svg';
import signincircle from '../../assets/images/otpcircle.png';
import { BASE_URL } from "../../config.js";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']); // State for 4 OTP digits

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if the current one is filled
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join(''); // Combine the OTP digits

    try {
      const response = await axios.post(`${BASE_URL}/api/verifyOtp`, { otp: otpCode });
      console.log('API Response:', response.data);
      if (response.data?.status === "success") {
        toast.success('Sign-in successful!');
        localStorage.setItem('authToken', response.data.token);
      } else {
        toast.error(response?.data?.msg || 'Failed to verify OTP. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden relative z-[234]">
      <div className="flex-1 xs:hidden flex justify-between flex-col lg:flex bg-cover bg-center"
        style={{ backgroundImage: `url(${signinimg})` }}>
        <div>
          <h1 className='flex gap-1 text-white items-center'><img src={icon3} alt="EchoWrite Logo" />EchoWrite</h1>
        </div>
        <div className="flex pt-[1%] mb-12 xs:p-0">
          <div className="bg-opacity-70 backdrop-blur-xl pl-4 pr-12 max-w-lg max-h-72 p-4 rounded-xl">
            <button className='flex gap-3 my-3 text-white rounded-3xl bg-[#008CD2] py-2 px-4'><img src={icon2} alt="Icon" />
              Top Notch Stock Resources
            </button>
            <p className="text-lg text-white font-normal mb-2">Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
          </div>
        </div>
        <div className='absolute lg:block hidden bottom-[-140px] right-[430px] opacity-75'>
          <img src={signincircle} alt="Circle" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center xs:items-center xs:justify-start justify-center bg-white p-8">
        <div className="w-full max-w-md relative p-8 rounded-lg">
          <h2 className="text-[23px] font-semibold text-black mb-2 text-center">OTP Verification</h2>
          <p className="mb-6 text-center text-[15px] font-normal text-[#7E7E7E]">Please enter the OTP received at your email or SMS</p>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Otp;

// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import icon3 from "../../assets/svg/otpheadlogo.svg"
// import { Link, useNavigate } from 'react-router-dom';
// import signinimg from '../../assets/images/image.png';
// import icon2 from '../../assets/svg/otpicon.svg';
// import signincircle from '../../assets/images/otpcircle.png';
// import { BASE_URL } from "../../config.js";
// const Spinner = () => {
//   return (
//     <div className="border-t-4 border-blue-500 border-solid rounded-full w-6 h-6 animate-spin"></div>
//   );
// };

// const Otp = () => {
//   const navigate = useNavigate();
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${BASE_URL}/api/verifyOtp`,);
//       console.log('API Response:', response.data);
//       if (response.data?.status === "success") {
//         toast.success('Sign-in successful!');
//         toast.success(response?.data?.msg || 'Account created successfully!');

      
//         localStorage.setItem('authToken', response.data.token);
//         navigate('/home');
//       } else {
//         toast.error(response?.data?.msg || 'Failed to create account. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Failed to create account. Please try again.');
//     } finally {

//     }
//   };


//   return (
//     <div className="flex min-h-screen overflow-hidden relative z-[234]">
//       <div className="flex-1 xs:hidden flex justify-between flex-col lg:flex bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${signinimg})`,
//         }}>
//         <div>
// <h1 className='flex gap-1 text-white items-center'><img src={icon3} alt="" />EchoWrite</h1>
//         </div>
       
//         <div className="flex pt-[1%] ps-[20%] mb-12  xs:p-0">
//           <div className=" bg-opacity-70 backdrop-blur-xl pl-4 pr-12 max-w-lg max-h-72 p-4  rounded-xl">
//           <button className='flex gap-3 my-3 text-white rounded-3xl  bg-[#008CD2]  py-2 px-4'><img src={icon2} alt="" />
//           Top Notch Stock Resources
//           </button>
//             <p className="text-lg text-white inter_ff  font-normal mb-2"> Today, we create innovative solutions to the <br /> challenges that consumers face in both their <br /> everyday lives and events.</p>
//           </div>
//         </div>
//         <div className='absolute lg:block hidden bottom-[-140px] right-[430px] opacity-75'>
//           <img src={signincircle} alt="" />
//         </div>
//       </div>

//       <div className="flex-1 flex flex-col items-center xs:items-center xs:justify-start justify-center bg-white p-8">
//         <div className="w-full max-w-md relative p-8 rounded-lg">
//           <h2 className="text-[23px] font-semibold inter_ff text-black mb-2 text-center">OTP Verification</h2>
//           <p className="mb-6 text-center text-[15px] font-normal text-[#7E7E7E]">Please enter the OTP received at your email or SMS</p>
//           <form className='w-full ' onSubmit={handleSubmit}>
          
//             <div className="text-center mb-4">
//               <p></p>
//             </div>
//            <button>continue</button>
//           </form>
//         </div>
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>
//     </div>
//   );
// };

// export default Otp;
