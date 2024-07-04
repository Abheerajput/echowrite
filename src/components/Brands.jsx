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
    <div className="text-center px-3 pt-12">
      <h1 className="font-bold text-3xl inter_ff md:text-4xl text-[#161C2D]">
        Trusted by Various Brands
      </h1>
      <div className="overflow-hidden w-full h-24 md:h-28 lg:h-32 mt-4">
        <div className="marquee flex">
          <img src={Brand1} alt="Brand1" className="h-full mx-4" />
          <img src={Brand2} alt="Brand2" className="h-full mx-4" />
          <img src={Brand3} alt="Brand3" className="h-full mx-4" />
          <img src={Brand4} alt="Brand4" className="h-full mx-4" />
          <img src={Brand5} alt="Brand5" className="h-full mx-4" />
          <img src={Brand6} alt="Brand6" className="h-full mx-4" />
          <img src={Brand7} alt="Brand7" className="h-full mx-4" />
          {/* Duplicate images for smooth scrolling effect */}
          <img src={Brand1} alt="Brand1" className="h-full mx-4" />
          <img src={Brand2} alt="Brand2" className="h-full mx-4" />
          <img src={Brand3} alt="Brand3" className="h-full mx-4" />
          <img src={Brand4} alt="Brand4" className="h-full mx-4" />
          <img src={Brand5} alt="Brand5" className="h-full mx-4" />
          <img src={Brand6} alt="Brand6" className="h-full mx-4" />
          <img src={Brand7} alt="Brand7" className="h-full mx-4" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
