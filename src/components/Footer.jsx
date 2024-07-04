import React from 'react';
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../assets/svg/logo.svg";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 px-4 py-8">
                <div className="container max-w-[1400px] mx-auto xs:full xs:flex  w-full flex flex-wrap justify-around gap-8">
                    <div className="flex-1 w-[20%] xs:w-2/5 mb-8">
                        <img src={logo} alt="Logo" className="mb-4" />
                        <p className="text-gray-600 text-base mb-4">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                        <div className="flex space-x-4 w-full">
                            <FiTwitter className="social-icon text-gray-600 hover:text-[#FF9A26] rounded-full p-1 xs:h-8 xs:w-8 transition-colors duration-300" />
                            <LuFacebook className="social-icon text-gray-600 hover:text-[#FF9A26] rounded-full p-1 xs:h-8 xs:w-8 transition-colors duration-300" />
                            <FaInstagram className="social-icon text-gray-600 hover:text-[#FF9A26] rounded-full p-1 xs:h-8 xs:w-8 transition-colors duration-300" />
                            <SlSocialLinkedin className="social-icon text-gray-600 hover:text-[#FF9A26] rounded-full p-1 xs:h-8 xs:w-8 transition-colors duration-300" />
                        </div>
                    </div>

                    <div className="flex-1 w-[16%] xs:w-2/5 mb-8">
                        <p className="text-gray-800 text-lg font-semibold mb-2">Product</p>
                        <ul className="space-y-1 text-gray-600">
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Features</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Pricing</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">News</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Help desk</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Support</li>
                        </ul>
                    </div>

                    <div className="flex-1 w-[16%] xs:w-2/5 mb-8">
                        <p className="text-gray-800 text-lg font-semibold mb-2">Company</p>
                        <ul className="space-y-1 text-gray-600">
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">About us</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Contact us</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Careers</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Press</li>
                        </ul>
                    </div>

                    <div className="flex-1 w-[16%] xs:w-2/5 mb-8">
                        <p className="text-gray-800 text-lg font-semibold mb-2">Services</p>
                        <ul className="space-y-1 text-gray-600">
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Recording To Text</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Speech To Text</li>
                        </ul>
                    </div>

                    <div className="flex-1 w-[16%] mb-8">
                        <p className="text-gray-800 text-lg font-semibold mb-2">Legal</p>
                        <ul className="space-y-1 text-gray-600">
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Privacy Policy</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Terms & Conditions</li>
                            <li className="text-lg hover:text-[#FF9A26] transition-colors duration-300">Return Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mx-4 md:mx-8 lg:mx-16" />
            <div className="flex justify-center items-center space-x-1 py-4 bg-gray-100 text-gray-600">
                <p>Copyright ©</p>
                <p>2024</p>
                <p className="text-[#FF9A26]">EchoWrite.</p>
                <p>All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;



// import React from 'react';
// import twitter from "../assets/svg/twitterIcon.svg";
// import facebook from "../assets/svg/facebookicon.svg";
// import instagram from "../assets/svg/instagramicon.svg";
// import linkedin from "../assets/svg/linkidnicon.svg";
// import logo from "../assets/svg/logo.svg";

// const Footer = () => {
//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-10 px-4 md:px-10">
//                 <div className="pt-10 lg:pt-14 space-y-4 lg:space-y-6">
//                     <div className="flex items-center space-x-2">
//                         <img src={logo} alt="Logo" />
//                     </div>
//                     <p className="text-gray-600 text-base">
//                         With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
//                     </p>
//                     <div className="flex space-x-4 pt-4">
//                         <img src={twitter} alt="Twitter" />
//                         <img src={facebook} alt="Facebook" />
//                         <img src={instagram} alt="Instagram" />
//                         <img src={linkedin} alt="LinkedIn" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-start space-y-3 pt-10">
//                     <p className="text-gray-600 text-base inter_ff">Company</p>
//                     <div className="space-y-2">
//                         <p className="text-lg font-normal inter_ff">About us</p>
//                         <p className="text-lg font-normal inter_ff">Contact us</p>
//                         <p className="text-lg font-normal inter_ff">Careers</p>
//                         <p className="text-lg font-normal inter_ff">Press</p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-start space-y-3 pt-10">
//                     <p className="text-gray-600 text-base inter_ff">Product</p>
//                     <div className="space-y-2">
//                         <p className="text-lg font-normal inter_ff">Features</p>
//                         <p className="text-lg font-normal inter_ff">Pricing</p>
//                         <p className="text-lg font-normal inter_ff">News</p>
//                         <p className="text-lg font-normal inter_ff">Help desk</p>
//                         <p className="text-lg font-normal inter_ff">Support</p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-start space-y-3 pt-10">
//                     <p className="text-gray-600 text-base inter_ff">Services</p>
//                     <div className="space-y-2">
//                         <p className="text-lg font-normal inter_ff">Recording To Text</p>
//                         <p className="text-lg font-normal inter_ff">Speech To Text</p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-start space-y-3 pt-10">
//                     <p className="text-gray-600 text-base inter_ff">Legal</p>
//                     <div className="space-y-2">
//                         <p className="text-lg font-normal inter_ff">Privacy Policy</p>
//                         <p className="text-lg font-normal inter_ff">Terms & Conditions</p>
//                         <p className="text-lg font-normal inter_ff">Return Policy</p>
//                     </div>
//                 </div>
//             </div>
//             <hr />
//             <div className="flex justify-center items-center space-x-1 py-2">
//                 <p>Copyright ©</p>
//                 <p>2024</p>
//                 <p className="text-[#FF9A26]">EchoWrite.</p>
//                 <p>All rights reserved.</p>
//             </div>
//         </>
//     );
// };

// export default Footer;

