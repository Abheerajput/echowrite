import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-1 py-4 cursor-default bg-white h-3  text-gray-600 w-full mt-auto xs:aabsolute">
        <p className="text-[15px] font-normal mt-7 inter_ff text-[#04324D] text-nowrap">
          Copyright ©
        </p>
        <p className="text-[15px] font-normal mt-7 inter_ff text-[#04324D]">
          2024
        </p>
        <p className="text-[#FF9A26] text-[15px] mt-7 font-normal inter_ff">
          EchoWrite.
        </p>
        <p className="text-[15px] font-normal mt-7 inter_ff text-[#04324D] text-nowrap">
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
