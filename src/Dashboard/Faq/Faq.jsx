import React from 'react'
import bgimg from "../../assets/images/Frame.jpg";
import Navbar from '../Layout/Navbar';
const Faq = () => {
  return (
    <div className='min-h-screen flex flex-col' style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
      }}>
      <Navbar/>



      <div className='w-full min-h-content mt-12 '>
         <div className='mx-12 p-10  pb-12 py-4 rounded-xl  pt-12  bg-white'>
         <h1 className='text-[19px] text-[#161C2D] inter_ff font-bold'>Frequently Asked Questions</h1>
         <p className='text-[13px] font-normal inter_ff'>Create or edit projects </p>

<div className='mt-4'>
<select className='w-full py-4 ps-3 pr-3' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
<select className='w-full py-4 ps-3 pr-3' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
<select className='w-full py-4 ps-3 pr-3' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
<select className='w-full py-4 ps-3 pr-3' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
    </div>        
 
         </div>
        

       </div>

    </div>
  )
}

export default Faq
