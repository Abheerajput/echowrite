import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../assets/svg/userprofileicon.svg"
import share from "../../assets/svg/shareicon.svg"
const Sidebar = () => {
  return (
    <>
 <div className='flex  border-r-indigo-500' >
    <div className="bg-white text-black w-64  p-5">
      <ul className='flex flex-col pt-20 items-center'>
        <li className="mb-5">
          <Link to="/user/profile" className="hover:bg-[#008CD2] hover:text-white text-[#999999] p-2 text-[14px] font-bold inter_ff rounded">Edit Profile</Link>
        </li>
        <li className="mb-5">
          <Link to="/user/noti" className="hover:bg-[#008CD2]  hover:text-white text-[#999999] font-bold  p-2 rounded">Notifications</Link>
        </li>
        <li className="mb-5">
          <Link to="/user/plan" className="hover:bg-[#008CD2]  hover:text-white text-[#999999] font-bold p-2 rounded">Choose Plan</Link>
        </li>
      </ul>
    </div>
 </div>
   
    </>
  );
};

export default Sidebar;
