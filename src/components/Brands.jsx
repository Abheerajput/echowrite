import React from 'react'
import Brand1 from "../assets/svg/Brand1.svg"
import Brand2 from "../assets/svg/Brand2.svg"
import Brand3 from "../assets/svg/Brand3.svg"
import Brand4 from "../assets/svg/Brand4.svg"
import Brand5 from "../assets/svg/Brand5.svg"
import Brand6 from "../assets/svg/Brand6.svg"
import Brand7 from "../assets/svg/Brand7.svg"
const Brands = () => {
  return (
    <div>
        <div className="text-center  pt-[60px]">
        <h1 className="font-bold text-4xl  inter_ff">Trusted by Various BrandsSee what users say about EchoWrite</h1>
<div className='  justify-evenly flex pt-[49px] pb-[50px] '>
<p ><img src={Brand1} alt="" /></p>
    <p><img src={Brand2} alt="" /></p>
    <p><img src={Brand3} alt="" /></p>
    <p><img src={Brand4} alt="" /></p>
    <p><img src={Brand5} alt="" /></p>
    <p><img src={Brand6} alt="" /></p>
    <p><img src={Brand7} alt="" /></p>  
</div>
    </div>
    </div>
  )
}

export default Brands
