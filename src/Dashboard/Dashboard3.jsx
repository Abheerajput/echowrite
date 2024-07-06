import React, { useState } from 'react';
import mike from "../assets/svg/mikeicon.svg";
import playicon from "../assets/svg/playicon.svg";
import { jsPDF } from "jspdf";
import { saveAs } from 'file-saver';
import axios from 'axios';
import Navbar from './Navbar';
import Commonarea from './Commonarea';

const Dashboard3 = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Uploaded files:', files);
  };

  const handleConvert = (format) => {
    setRemainingMinutes(0);
    console.log('Converting to format:', format);
    downloadText(format);
  };

  const downloadText = (format) => {
    const text = textContent;

    if (format === 'pdf') {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save('document.pdf');
    } else if (format === 'docx') {
      const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      saveAs(blob, 'document.docx');
    } else if (format === 'txt') {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'document.txt');
    }
  };

 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = async (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    
    const translatedText = await translateText(textContent, newLanguage);
    setTextContent(translatedText);
  };

  const translateText = async (text, language) => {
    try {
      const response = await axios.post('/api/translate', {
        text,
        target_lang: language
      });
      
      return response.data.translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      return text;
    }
  };
  const dashboard3Links = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '/dashboard4' }, 
    { name: 'Support', path: '#' },
  ];

  return (
    <>
      <div className=" mx-auto mt-16 xs:h-screen h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 " style={{
      // backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
   <Navbar links={dashboard3Links} />
<div className="bg-white rounded-lg  xs:px-4 shadow-md pb-6  px-12 ">
          <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
            <span className='mt-[20px] lg:mt-0 xs:mt-0' >
              <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Speech to Text</h2>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px] ">Quickly transcribe your audio to text.</p>
            </span>
            <div className="mt-6 mb-4">
              <p className=" text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
              <div className="bg-[#EBEEF5] rounded-full h-[5px]  overflow-hidden" style={{ height: "5px" }}>
                <div
                  className="bg-[#EBEEF5] rounded-full"
                  style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
              </div>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
            </div>
          </div>
          <div
            className="border-2 border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:justify-around cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
           <div className='flex flex-col w-full    xs:flex xs:flex-col xs:justify-aroundl'>
<div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
<div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:justify-around xs:w-full xs:mb-2'>
            <p className='flex justify-center'>
              <img className='w-24 h-24' src={mike} alt="Microphone" />
            </p>
                  <p className='text-[18px] inter_ff text-black font-bold text-center'>Start Speaking We’ll Convert <br /> your Voice to Text</p>
                  <p className='text-[18px] font-bold'>00:55 mins</p>
                  <p className='text-[#808080] text-nowrap'>Support Multiple Language.</p>
                  <p className='pt-[2%] flex justify-center gap-2 xs:pb-3'>
                    <img src={playicon} alt="" />
                    <button className='text-white px-6 py-1 rounded-2xl' style={{ backgroundColor: "#D93F21" }}>
                      Stop
                    </button>
                  </p>
                </div>
                <div className='w-3/5 border-l border-gray-300  xs:w-full xs:border-2  xs:border-l-0  xs:border-r-0'>
            <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>
            <Commonarea/>
          </div>
              </div>
              
              <div className="flex  mt-4 xs:mb-3  justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

<div className="flex gap-4 ml-[5%] xs:ml-0 pt-2  xs:pt-4">
  <div className="mb-4">
    <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
    <select
                      id="language"
                      className="border border-gray-300  text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                      style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}>
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                      <option value="en">English</option>
                      <option value="zh">Chinese</option>
                      <option value="ko">Korean</option>
                      <option value="fr">French</option>
                    
                    </select>
                  </div>
                  <div className="mb-4">
                  <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
                  <select
                      id="format"
                      className="border border-gray-300  text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                      style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}  >
                      <option value="text">Text</option>
                     
                    </select>
                  </div>
                </div>
                <div className='relative mr-6 lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
                  <button
             className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
                    onClick={toggleDropdown}
                    disabled={remainingMinutes === 0}
                  >
                    Download as a Document
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                      <ul>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleConvert('pdf')}
                        >
                          PDF
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleConvert('docx')}
                        >
                          DOCX
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleConvert('txt')}
                        >
                          TXT
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard3;
