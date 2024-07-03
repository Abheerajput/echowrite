import React from 'react';
import Brand1 from "../assets/svg/Brand1.svg";
import Brand2 from "../assets/svg/Brand2.svg";
import Brand3 from "../assets/svg/Brand3.svg";
import Brand4 from "../assets/svg/Brand4.svg";
import Brand5 from "../assets/svg/Brand5.svg";
import Brand6 from "../assets/svg/Brand6.svg";
import Brand7 from "../assets/svg/Brand7.svg";

const Brands = () => {
  return (
    <div>
      <div className="text-center pt-[60px]">
        <h1 className="font-bold text-4xl inter_ff text-[#161C2D] sm:text-[25px] md:text-[30px] xs:text-[20px]">
          Trusted by Various BrandsSee what users say about EchoWrite
        </h1>
        <div className="flex justify-evenly pt-[49px] pb-[50px] flex-wrp">
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[100px]"><img src={Brand1} alt="Brand1" className="" /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand2} alt="Brand2" className="" /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand3} alt="Brand3" className="w-full " /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand4} alt="Brand4" className="w-full " /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand5} alt="Brand5" className="w-full" /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand6} alt="Brand6" className="w-full " /></p>
          <p className="p-2 w-[150px] sm:w-[100px] md:w-[120px] lg:w-[150px] xs:w-[190px]"><img src={Brand7} alt="Brand7" className="w-full" /></p>  
        </div>
      </div>
    </div>
  );
}

export default Brands;
