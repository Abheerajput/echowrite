import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import signinimg from '../assets/images/signinimg.png';
import logo from '../assets/svg/logo.svg';
import icon1 from '../assets/svg/signinicon1.svg';
import icon2 from '../assets/svg/signinicon2.svg';
import icon3 from '../assets/svg/signinicon3.svg';
import icon4 from '../assets/svg/signinicon4.svg';
import signincircle from '../assets/images/signincircle.png';
import { BASE_URL } from "../config.js";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false); 
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const { confirmPassword, ...userData } = user; // Exclude confirmPassword from userData

    setLoading(true); // Set loading to true when submitting

    try {
      console.log('Submitting to URL: 2', `${BASE_URL}/api/signin`);
      const response = await axios.post(`${BASE_URL}/api/signin`, user);
      console.log(response);
      if (response.data?.status === "success") {
        toast.success('Sign-in successful!');
        toast.success(response?.data?.msg || 'Account created successfully!');
        setUser({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
      } else {
        console.error('Error:', response.data);
        toast.error(response?.data?.msg || 'Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create account. Please try again.');
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  const handleSuccess = async (credentialResponse) => {
    setLoadingGoogle(true); // Set loadingGoogle to true when Google sign-in starts

    try {
      const response = await axios.post(`${BASE_URL}/api/googlesignin`, {
        credential: credentialResponse.credential,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log('Sign-in successful:', data);
        toast.success('Sign-in successful!');
        localStorage.setItem('authToken', response.data.token);
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        console.error('Sign-in failed:', response.data.error);
        toast.error('Sign-in failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      toast.error('Sign-in failed. Please try again.');
    } finally {
      setLoadingGoogle(false); // Set loadingGoogle to false when done
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden relative z-[234]">
      {/* Left section */}
      <div className="flex-1 hidden lg:flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${signinimg})`,
        }}>
        <div className='pl-[32px] pt-[3%]'>
          <img src={logo} alt="Logo" className="mb-8" />
        </div>
        <div className="mb-8 pl-[70px]">
          <button className="mb-4 bg-[#008CD2] text-white py-1 rounded-full flex items-center px-[7%]">
            <span className=" ml-[-9%] pr-[8%]"><img src={icon1} alt="" /></span> Speech to Text
          </button>
        </div>
        <div className="flex pt-[1%] pl-[50px] p-8 xs:p-0">
          <div className=" bg-opacity-70 backdrop-blur-xl p-4 w-1/2 rounded-xl">
            <p><img src={icon2} alt="" /></p>
            <p className="text-lg text-white font-bold mb-2"> Best Speech to Text and <br /> Recording to Text across <br /> the internet.</p>
          </div>
        </div>
        <div className='flex justify-center pb-[3%]'>
          <button className="bg-[#FF9A26] text-white py-1 px-8 rounded-full flex items-center lg:mt-[4%]">
            <span className="lg:mr-[5%] lg:ml-[-12%]"><img src={icon4} alt="" /></span> Voice Recording
          </button>
        </div>
        <div className='absolute lg:block hidden bottom-[-140px] right-[430px] opacity-75'>
          <img src={signincircle} alt="" />
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex flex-col items-center xs:items-center xs:justify-start justify-center bg-white p-8">
        <p className='mt-4 mb-4 font-light inter_ff text-[11px]'>Don’t have an account? <span className='text-[#008CD2] font-medium text-[11px] inetr_ff' style={{ borderBottom: "1px solid #008CD2" }}><Link to="/login">Sign in! </Link> </span></p>
        <div className="w-full max-w-md relative p-8 rounded-lg">
          <h2 className="text-[23px] font-semibold inter_ff text-black mb-2 text-center">Get Started With EchoWrite</h2>
          <p className="mb-6 text-center text-[11px] font-normal text-[#7E7E7E]">Getting started is easy</p>
          <form className='w-full ' onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                required
                disabled={loading} // Disable inputs when loading
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
                disabled={loading} // Disable inputs when loading
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
                disabled={loading} // Disable inputs when loading
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded-lg w-full py-2 px-3 text-gray-700"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading} // Disable inputs when loading
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className={`bg-[#008CD2] text-white font-normal py-2 px-4 text-[15px] inter_ff rounded-full w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Loading...' : 'Create Account'}
              </button>
            </div>
            <div className="text-center mb-4">
              <p><img className='h-[34px]' src={icon3} alt="" /></p>
            </div>
            <div className="flex justify-center">
              {loadingGoogle ? (
                  <p>Loading...</p>
                ):(
                  <GoogleLogin
                  className={`rounded-full ${loadingGoogle ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onSuccess={handleSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  disabled={loadingGoogle} 
                /> 
                )
              }
             
             
            </div>
          </form>
          <p className="text-start text-[#5A5A5A] text-[12px] font-light inter_ff lg:text-nowrap mt-4">
            By continuing you indicate that you read and agreed to the <Link className="text-[#008CD2] text-[12px] font-light inter_ff" style={{ borderBottom: "1px solid #008CD2" }}>Terms of Use</Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Signup;
