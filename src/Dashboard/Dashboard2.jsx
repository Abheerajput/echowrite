import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import mike from "../assets/svg/mikeicon.svg";
import playicon from "../assets/svg/playicon.svg";
import pauseicon from "../assets/svg/pauseicon.svg";
import Navbar from './Navbar';
import axios from 'axios';

const Dashboard2 = () => {
  const [remainingMinutes, setRemainingMinutes] = useState(1000);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [stream, setStream] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [textContent, setTextContent] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (recordingStarted && remainingMinutes > 0) {
      const timerInterval = setInterval(() => {
        setTimer(prev => prev + 1);
        setRemainingMinutes(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [recordingStarted, remainingMinutes]);

  useEffect(() => {
    if (listening) {
      setRecognizedText(transcript);
    }
  }, [transcript, listening]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Uploaded files:', files);
  };

  const handleConvert = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `recorded-speech-${timer}secs.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleStartRecording = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
    setRecordingStarted(true);
    setShowInstruction(false); // Hide instruction text
    setTimer(0);

    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(stream => {
        setStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);

        mediaRecorder.start();
        mediaRecorder.ondataavailable = event => {
          if (event.data && event.data.size > 0) {
            const blob = new Blob([event.data], { type: 'audio/webm' });
            setAudioBlob(blob);
          }
        };
      })
      .catch(error => console.error('Error accessing media devices:', error));
  };

  const handlePauseRecording = () => {
    SpeechRecognition.stopListening();
    setRecordingStarted(false);
    if (mediaRecorder) {
      mediaRecorder.pause();
    }
  };

  const handleResumeRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
    setRecordingStarted(true);
    if (mediaRecorder) {
      mediaRecorder.resume();
    }
  };

  const handlePlayClick = () => {
    if (recordingStarted) {
      handlePauseRecording();
      setIsPlaying(false);
    } else {
      handleResumeRecording();
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    setRecordingStarted(false);
    setShowInstruction(true); // Show instruction text
    setTimer(0);
    setAudioBlob(null);
    setRecognizedText('');
    resetTranscript();

    if (mediaRecorder) {
      mediaRecorder.stop();
    }

    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
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

  const handleDownload = () => {
    if (selectedFormat === 'pdf') {
      const doc = new jsPDF();
      doc.text(textContent, 10, 10);
      doc.save('document.pdf');
    } else if (selectedFormat === 'docx') {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun(textContent)
                ]
              })
            ]
          }
        ]
      });

      Packer.toBlob(doc).then(blob => {
        saveAs(blob, 'document.docx');
      });
    }
  };

  const dashboard2Links = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '/dashboard3' },
    { name: 'Support', path: '#' },
  ];

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="mx-auto mt-16 xs:h-screen h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0">
        <Navbar links={dashboard2Links} />

        <div className="bg-white rounded-lg xs:px-4 shadow-md pb-6 px-12">
          <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
            <span className='mt-[20px] lg:mt-0 xs:mt-0'>
              <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Speech to Text</h2>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px]">Quickly transcribe your audio to text.</p>
            </span>
            <div className="mt-6 mb-4">
              <p className="text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
              <div className="bg-[#EBEEF5] rounded-full h-[5px] overflow-hidden" style={{ height: "5px" }}>
                <div
                  className="bg-[#EBEEF5] rounded-full"
                  style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
              </div>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
              <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Recording time seconds</p>
            </div>
          </div>

          <div
            className="border-2 border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
            <div className='flex flex-col w-full xs:flex xs:flex-col xs:justify-around'>
              <div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
                <div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2'>
                  <p className='flex justify-center'>
                    <img className='w-24 h-24' src={mike} alt="Microphone" />
                  </p>
                  <p className='font-bold text-2xl'>
                    {timer} Seconds
                  </p>
                  {showInstruction && (
                    <p className='text-[18px] inter_ff text-black font-bold text-center'>
                      Start Speaking We’ll Convert <br /> your Voice to Text
                    </p>
                  )}
                  <p className='pt-2 flex gap-3'>
                    <button className={`bg-[#008CD2] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl ${recordingStarted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleStartRecording} disabled={recordingStarted}>
                      <img className='w-5 h-5 inline mr-1' src={playicon} alt="Start" />
                      Start
                    </button>
                    <button className='bg-[#FF0000] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl' onClick={handlePlayClick}>
                      <img className='w-5 h-5 inline mr-1' src={pauseicon} alt="Pause" />
                      {recordingStarted ? 'Pause' : 'Resume'}
                    </button>
                    <button className='bg-[#FF0000] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl' onClick={handleReset}>
                      Reset
                    </button>
                  </p>
                  {audioBlob && (
                    <button
                      onClick={handleConvert}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    >
                      Download MP3
                    </button>
                  )}
                </div>

                <div className='flex flex-col w-full px-4  border-l border-gray-300  xs:w-full xs:border-2  xs:border-l-0  xs:border-r-0'>
                <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>

                  <CKEditor
                    editor={ClassicEditor}
                    data={recognizedText}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setTextContent(data);
                    }}
                  />
                </div>
              </div>
            
         

              <div className="flex  mt-4 xs:mb-3  justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

<div className="flex gap-4 ml-[5%] xs:ml-0 pt-2  xs:pt-4">
<div className=' mb-4'>
<label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
                  <select
                  
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="bg-gray-200 border border-gray-400    text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>

                
                  <div className="mb-4">
                  <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
                  <select
                    id="format"
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                         className="border bg-gray-200 border-gray-300  text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
                         style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }} 
                  >
                    <option value="pdf">PDF</option>
                    <option value="docx">DOCX</option>
                    {/* Add more formats as needed */}
                  </select>
                  </div>

                </div>
               <div className='flex justify-center items-center mb-4'>
                
                                  </div>
                                  {audioBlob && (
                    <button
                      onClick={handleConvert}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    >
                      Download MP3
                    </button>
                  )}
                <div className='relative mr-6 lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
                  <button
                    onClick={handleDownload}
                      className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
                  >
                    Download Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;



// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import mike from "../assets/svg/mikeicon.svg";
// import Navbar from './Navbar';

// const Dashboard2 = () => {
//   const [remainingMinutes, setRemainingMinutes] = useState(10);
//   const [recordingStarted, setRecordingStarted] = useState(false);
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   useEffect(() => {
//     if (recordingStarted && remainingMinutes > 0) {
//       const timer = setInterval(() => {
//         setRemainingMinutes(prev => prev - 1);
//       }, 60000); // Decrease remainingMinutes by 1 every minute (60000 milliseconds)
//       return () => clearInterval(timer);
//     }
//   }, [recordingStarted, remainingMinutes]);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     console.log('Uploaded files:', files);
//   };

//   const handleConvert = () => {
//     // Simulating conversion to MP3 file
//     const blob = new Blob([transcript], { type: 'audio/mp3' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'recorded-speech.mp3';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   const handleStartRecording = () => {
//     resetTranscript();
//     SpeechRecognition.startListening({ continuous: true });
//     setRecordingStarted(true);
//   };

//   const handleStopRecording = () => {
//     SpeechRecognition.stopListening();
//     setRecordingStarted(false);
//   };

//   const dashboard2Links = [
//     { name: 'FAQ', path: '#' },
//     { name: 'Next', path: '/dashboard3' }, 
//     { name: 'Support', path: '#' },
//   ];

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <>
//       <div className="mx-auto mt-16 xs:h-screen h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0">
//         <Navbar links={dashboard2Links} />

//         <div className="bg-white rounded-lg xs:px-4 shadow-md pb-6 px-12">
//           <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
//             <span className='mt-[20px] lg:mt-0 xs:mt-0'>
//               <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Speech to Text</h2>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px]">Quickly transcribe your audio to text.</p>
//             </span>
//             <div className="mt-6 mb-4">
//               <p className="text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
//               <div className="bg-[#EBEEF5] rounded-full h-[5px] overflow-hidden" style={{ height: "5px" }}>
//                 <div
//                   className="bg-[#EBEEF5] rounded-full"
//                   style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
//               </div>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
//             </div>
//           </div>

//           <div
//             className="border-2 border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around cursor-pointer"
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={handleFileDrop}
//           >
//             <div className='flex flex-col w-full xs:flex xs:flex-col xs:justify-around'>
//               <div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
//                 <div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2'>
//                   <p className='flex justify-center'>
//                     <img className='w-24 h-24' src={mike} alt="Microphone" />
//                   </p>
//                   <p className='text-[18px] inter_ff text-black font-bold text-center'>Start Speaking We’ll Convert <br /> your Voice to Text</p>
//                   <p className='pt-2'>
//                     <button className={`bg-[#008CD2] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl ${recordingStarted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleStartRecording} disabled={recordingStarted}>Start Now</button>
//                     <button className={`bg-[#E4E4E4] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl ml-2 ${!recordingStarted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleStopRecording} disabled={!recordingStarted}>Stop</button>
//                   </p>
//                 </div>

//                 <div className='w-3/5 border-l border-gray-300 xs:w-full xs:border-2 xs:border-l-0 xs:border-r-0'>
//                   <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>
//                   <div className="relative px-4 pb-4">
//                     <textarea
//                       className="border border-gray-300 rounded-md px-5 py-2 w-full h-48 resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
//                       placeholder='Text Visible Here'
//                       value={transcript}
//                       readOnly
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex mt-4 xs:mb-3 justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap" style={{ borderTopWidth: "1px" }}>
//                 <div className="flex gap-4 ml-[5%] xs:ml-0 pt-2 xs:pt-4">
//                   <div className="mb-4">
//                     <label className="block text-[#808080] text-[15px] inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
//                     <select
//                       id="language"
//                       className="border border-gray-300 text-[#808080] text-[15px] w-[151px] xs:w-[100px] inter_ff font-normal rounded-md px-5 py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
//                       style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}>
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                     </select>
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
//                     <select
//                       id="format"
//                       className="border border-gray-300 text-[#808080] text-[15px] inter_ff font-normal xs:w-[100px] w-[151px] rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
//                       style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}>
//                       <option value="text">Text</option>
//                     </select>
//                   </div>
//                 </div>
//                 <p className='lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
//                   <button
//                     className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
//                     onClick={handleConvert}
//                     disabled={remainingMinutes === 0 || !transcript}
//                     style={{ backgroundColor: "#E4E4E4" }}>
//                     Download as MP3
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard2;



// import React, { useState } from 'react';
// import mike from "../assets/svg/mikeicon.svg";
// import Navbar from './Navbar';
// // import Commonarea from './Commonarea';
// import playicon from "../assets/svg/playicon.svg"
// import stopicon from "../assets/svg/pauseicon.svg"
// const Dashboard2 = () => {
//   const [remainingMinutes, setRemainingMinutes] = useState(10);


//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     // Process the files here (e.g., upload, convert)
//     console.log('Uploaded files:', files);
//   };

//   const handleConvert = () => {
//     // Simulate conversion process (replace with actual logic)
//     setRemainingMinutes(0);
//     // ... other actions
//   };

//   const dashboard2Links = [
//     { name: 'FAQ', path: '#' },
//     { name: 'Next', path: '/dashboard3' }, 
//     { name: 'Support', path: '#' },
//   ];

//   return (
//     <>
//       <div className=" mx-auto mt-16 xs:h-screen h-screen px-8 pb-12 bg-[#F1F4F5] xs:m-0 xs:px-3 md:m-0 sm:m-0 " style={{
//         // backgroundImage: `url(${bgimg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}>
     
//      <Navbar links={dashboard2Links} />

//         <div className="bg-white rounded-lg  xs:px-4 shadow-md pb-6  px-12 ">
//           <div className='flex justify-between items-center xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2 xs:flex xs:flex-col xs:justify-around'>
//             <span className='mt-[20px] lg:mt-0 xs:mt-0' >
//               <h2 className="text-[30px] xs:text-[25px] font-bold inter_ff text-[#000000]">Speech to Text</h2>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-[-4px] ">Quickly transcribe your audio to text.</p>
//             </span>
//             <div className="mt-6 mb-4">
//               <p className=" text-[15px] text-[#808080] font-normal inter_ff0">Available conversion minute(s):</p>
//               <div className="bg-[#EBEEF5] rounded-full h-[5px]  overflow-hidden" style={{ height: "5px" }}>
//                 <div
//                   className="bg-[#EBEEF5] rounded-full"
//                   style={{ width: `${(remainingMinutes / 10) * 100}%` }}></div>
//               </div>
//               <p className="text-[15px] text-[#808080] font-normal inter_ff mt-1">Remaining: {remainingMinutes} minute(s)</p>
//             </div>
//           </div>

//           <div
//             className="border-2 border-gray-300  rounded-lg  w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around  cursor-pointer"
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={handleFileDrop}
//           >



//             <div className='flex flex-col w-full    xs:flex xs:flex-col xs:justify-aroundl'>
//               <div className='flex pt-4 xs:flex xs:flex-col xs:justify-around'>
//                 <div className='flex flex-col items-center w-2/5 xs:flex xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2'>
//                   <p className='flex justify-center'>
//                     <img className='w-24 h-24' src={mike} alt="Microphone" />

//                   </p>
//                   <p className='text-[18px] inter_ff text-black font-bold text-center'>Start Speaking We’ll Convert <br /> your Voice to Text</p>
//                   <p className='pt-2'>
//                     <button className='bg-[#008CD2] text-[14px] font-normal inter_ff text-white px-4 py-2 rounded-2xl'>Start Now</button>
//                     <div className='flex flex-col'>
//                     <p className='flex flex-row-reverse  justify-center items-center'  >play <img src={playicon} alt="" /></p>
//                     <p className='flex justify-center flex-row-reverse items-center'>stop <img src={stopicon} alt="" /></p>
//                     </div>
                   
//                   </p>

//                 </div>

//                 <div className='w-3/5 border-l border-gray-300  xs:w-full xs:border-2  xs:border-l-0  xs:border-r-0'>
//                   <p className='text-[18px] text-[#008CD2] inter_ff font-bold flex justify-start py-2 ml-2'>Converted text Here</p>
//                   {/* <Commonarea/>/'/' */}
//                   <div className="relative px-4 pb-4">
//                     <textarea
//                       className="border border-gray-300 rounded-md px-5 py-2 w-full h-48 resize-none focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder-center"
//                       placeholder='Text Visible Here'
//                     ></textarea>
//                   </div>
//                 </div>

//               </div>


//               <div className="flex  mt-4 xs:mb-3  justify-between xs:flex xs:flex-col xs:items-center items-center xs:text-wrap " style={{ borderTopWidth: "1px " }}>

//                 <div className="flex gap-4 ml-[5%] xs:ml-0 pt-2  xs:pt-4">
//                   <div className="mb-4">
//                     <label className="block text-[#808080] text-[15px]   inter_ff font-normal mb-2" htmlFor="language">Choose Language</label>
//                     <select
//                       id="language"
//                       className="border border-gray-300  text-[#808080] text-[15px] w-[151px]  xs:w-[100px] inter_ff font-normal rounded-md px-5 py-1  mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
//                       style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}    >
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                       <option value="en">English</option>
//                     </select>
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
//                     <select
//                       id="format"
//                       className="border border-gray-300  text-[#808080] text-[15px] inter_ff font-normal xs:w-[100px]  w-[151px] rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
//                       style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}  >
//                       <option value="text">Text</option>
                     
//                     </select>
//                   </div>
//                 </div>
//                 <p className=' lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
//                   <button
//                     className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
//                     onClick={handleConvert}
//                     disabled={remainingMinutes === 0}
//                     style={{ backgroundColor: "#E4E4E4" }}>
//                     Download as a Document
//                   </button>
//                 </p>
//               </div>

//             </div>



//           </div>


//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard2;



