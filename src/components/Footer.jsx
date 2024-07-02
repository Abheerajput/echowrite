import React from 'react';
import twitter from "../assets/svg/twitterIcon.svg";
import facebook from "../assets/svg/facebookicon.svg";
import instagram from "../assets/svg/instagramicon.svg";
import linkedin from "../assets/svg/linkidnicon.svg";
import logo from "../assets/svg/logo.svg";

const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-10 px-4 md:px-10">
                <div className="pt-10 lg:pt-14 space-y-4 lg:space-y-6">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" />
                        <p className="text-2xl libre_ff font-bold">
                            ECHO
                            <span className="text-2xl libre_ff text-[#008CD2] font-bold">WRITE</span>
                        </p>
                    </div>
                    <p className="text-gray-600 text-base">
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                    <div className="flex space-x-4 pt-4">
                        <img src={twitter} alt="Twitter" />
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 pt-10">
                    <p className="text-gray-600 text-base inter_ff">Company</p>
                    <div className="space-y-2">
                        <p className="text-lg font-normal inter_ff">About us</p>
                        <p className="text-lg font-normal inter_ff">Contact us</p>
                        <p className="text-lg font-normal inter_ff">Careers</p>
                        <p className="text-lg font-normal inter_ff">Press</p>
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 pt-10">
                    <p className="text-gray-600 text-base inter_ff">Product</p>
                    <div className="space-y-2">
                        <p className="text-lg font-normal inter_ff">Features</p>
                        <p className="text-lg font-normal inter_ff">Pricing</p>
                        <p className="text-lg font-normal inter_ff">News</p>
                        <p className="text-lg font-normal inter_ff">Help desk</p>
                        <p className="text-lg font-normal inter_ff">Support</p>
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 pt-10">
                    <p className="text-gray-600 text-base inter_ff">Services</p>
                    <div className="space-y-2">
                        <p className="text-lg font-normal inter_ff">Recording To Text</p>
                        <p className="text-lg font-normal inter_ff">Speech To Text</p>
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 pt-10">
                    <p className="text-gray-600 text-base inter_ff">Legal</p>
                    <div className="space-y-2">
                        <p className="text-lg font-normal inter_ff">Privacy Policy</p>
                        <p className="text-lg font-normal inter_ff">Terms & Conditions</p>
                        <p className="text-lg font-normal inter_ff">Return Policy</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center items-center space-x-1 py-2">
                <p>Copyright ©</p>
                <p>2024</p>
                <p className="text-[#FF9A26]">EchoWrite.</p>
                <p>All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;

