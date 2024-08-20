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
const Spinner = () => {
  return (
    <div className="border-t-4 border-blue-500 border-solid rounded-full w-6 h-6 animate-spin"></div>
  );
};

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

    const { confirmPassword, ...userData } = user;

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/signin`, userData);
      console.log('API Response:', response.data);
      if (response.data?.status === "success") {
        toast.success('Sign-in successful!');
        toast.success(response?.data?.msg || 'Account created successfully!');
 // Store the user data in localStorage
 localStorage.setItem('userName', userData.name);
 localStorage.setItem('email', userData.email);
 localStorage.setItem('authToken', response.data.token);
        setUser({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
      } else {
        toast.error(response?.data?.msg || 'Failed to create account. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = async (credentialResponse) => {
    setLoadingGoogle(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/googlesignin`, {
        credential: credentialResponse.credential,
      });

      if (response.status === 200) {
        toast.success('Sign-in successful!');
        localStorage.setItem('authToken', response.data.token);
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        toast.error('Sign-in failed. Please try again.');
      }
    } catch (error) {
      toast.error('Sign-in failed. Please try again.');
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden relative z-[234]">
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className={`bg-[#008CD2] text-white font-normal py-2 px-4 text-[15px] inter_ff rounded-full w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={loading}
              >
                {loading ?   <Spinner/> : 'Create Account'}
              </button>
            </div>
            <div className="text-center mb-4">
              <p><img className='h-[34px]' src={icon3} alt="" /></p>
            </div>
            <div className="flex justify-center">
              {loadingGoogle ? (
                <div className="spinner"></div>
              ) : (
                <GoogleLogin
                  className={`rounded-full ${loadingGoogle ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onSuccess={handleSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  useOneTap
                />
              )}
            </div>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Signup;
