import React, { useState, useEffect , useMemo} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import JoditEditor from 'jodit-react';

import mike from "../assets/svg/mikeicon.svg";
import playicon from "../assets/svg/playicon.svg";
import pauseicon from "../assets/svg/pauseicon.svg";
import Navbar from './Navbar';
import axios from 'axios';

const Mobileview = () => {
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
  const [showRecordingControls, setShowRecordingControls] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const editorConfig = useMemo(() => {
    return {
      uploader: {
        insertImageAsBase64URI: true,
        url: '/upload_image',
        filesVariableName: function (i) {
          return 'images[' + i + ']';
        },
        format: 'json',
        method: 'POST',
        process: function (resp) {
          return {
            files: resp.files.map(file => file.url)
          };
        },
        error: function (e) {
          console.error('Error uploading image:', e);
        }
      },
      filebrowser: {
        ajax: {
          url: '/browse_images' 
        },
        uploader: {
          insertImageAsBase64URI: true
        }
      }
    };
  }, []); // empty dependency array

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
    setIsPlaying(true);
    setShowInstruction(false); // Hide instruction text
    setTimer(0);
    setShowRecordingControls(true); // Show recording controls

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
    setIsPlaying(false);
    if (mediaRecorder) {
      mediaRecorder.pause();
    }
  };

  const handleResumeRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
    setRecordingStarted(true);
    setIsPlaying(true);
    if (mediaRecorder) {
      mediaRecorder.resume();
    }
  };

  const handlePlayClick = () => {
    if (recordingStarted) {
      handlePauseRecording();
    } else {
      handleResumeRecording();
    }
  };

  const handleReset = () => {
    setRecordingStarted(false);
    setShowInstruction(true); // Show instruction text
    setTimer(0);
    setAudioBlob(null);
    setRecognizedText('');
    resetTranscript();
    setShowRecordingControls(false); // Hide recording controls

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
  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || ''
  };
   
  const handleDownload = () => {
    const plainTextContent = stripHtmlTags(textContent);
  
    if (selectedFormat === 'pdf') {
      const doc = new jsPDF();
      doc.text(plainTextContent, 10, 10);
      doc.save('document.pdf');
    } else if (selectedFormat === 'docx') {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun(plainTextContent)
                ]
              })
            ]
          }
        ]
      })
  
      Packer.toBlob(doc).then(blob => {
        saveAs(blob, 'document.docx')
      })
    }
  }
  

  const dashboard2Links = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '#' },
    { name: 'Support', path: '#' },
  ]

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }


  return (
    <>
      <div className="mx-auto mt-16 xs:h-full  h-screen  px-8 pb-12 bg-[#F4F7FA]  xs:m-0 xs:px-0 md:m-0 sm:m-0">
        <Navbar links={dashboard2Links} />


        <div className="bg-[#F4F7FA]  rounded-lg xs:px-0 shadow-md pb-12 px-12">
        <div className=' mb-4 xs:px-2'>
    <p className='flex xs:ml-1 justify-start'><label className=" text-black text-[15px] inter_ff font-normal mb-2 " htmlFor="language"> Language</label></p>

                  <select
                  
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="bg-white border  xs:h-12   text-[#808080] text-[15px] inter_ff xs:w-full font-normal rounded-md py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
                  >
                    <option value="en">Pathology</option>
                    <option value="en">English</option>
                    
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>

          <div className='flex justify-between items-center xs:hidden xs:items-start xs:px-2 xs:pt-3 lg:pt-3 lg:pb-2  xs:flex-col xs:justify-around'>
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
            className="border-0 border-gray-300 rounded-lg w-full flex xs:px-2 text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around cursor-pointer "
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
             <div className='flex flex-col w-full xs:flex xs:flex-col xs:justify-around'>
              <div className='flex lg:py-2  xl:py-2 md:py-8 xs:flex xs:flex-col xs:justify-around bg-white mt-4 shadow-sm rounded-3xl'>
                <div className='flex flex-col items-center w-2/5 xs:flex  xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2 xs:pt-12'>
                  <p className='flex justify-center'>
                    <img className='w-24 h-24' src={mike} alt="Microphone" />
                  </p>
                  {/* <p className='font-bold text-2xl'>
                    00.{timer}mins
                  </p> */}
                  {showInstruction && (
                    <p className='text-[18px] inter_ff text-black font-bold text-center py-4'>
                      Start Speaking We’ll Convert <br /> your Voice to Text
                    </p>
                  )}
                  <p className="py-3">Ready Set Go
                  </p>
                  <div className="flex justify-center xs:hidden space-x-8 mt-4 mb-4">
                      {!showRecordingControls ? (
                        <button
                          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          onClick={handleStartRecording}
                        >
                          Start
                        </button>
                      ) : (
                        <div id="handlerecording" className="flex justify-center items-center space-x-8 xs:w-full">
                          <button onClick={handlePlayClick}>
                            <img src={isPlaying ? pauseicon : playicon} alt="Play/Pause" className="w-8 h-8" />
                          </button>
                          <button
                            className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                            onClick={handleReset}
                          >
                            Stop
                          </button>
                        </div>
                      )}
                    </div>
                </div> 


                  <div className='flex xs:hidden flex-col w-3/5 px-2 pb-0 mt-2 xs:w-full  border-0 border-gray-300   xs:border-2  xs:border-l-0  xs:border-r-0'>
                  <div className=' xs:pb-5'>
                    <h3 className='text-[25px] xs:text-[18px] flex justify-start mt-[-11px] items-start inter_ff text-[#008CD2] font-bold xs:mt-4'>Converted text Here</h3>
                    <div className="mt-2 h-96">

                    <JoditEditor
                    
                     config={editorConfig} 
    value={recognizedText}
    onChange={newContent => setTextContent(newContent)}
  />
          </div>

                
                
                </div>
                </div>
                </div>

                <div className=" xs:w-full mt-4 xs:mb-3  " >
<div className="  pt-2  xs:pt-4 xs:w-full">
<div className=' mb-4'>
    <p className='flex xs:ml-1 justify-start'><label className=" text-black text-[15px] inter_ff font-normal mb-2 " htmlFor="language"> Language</label></p>

                  <select
                  
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="bg-white border  xs:h-12   text-[#808080] text-[15px] inter_ff xs:w-full font-normal rounded-md py-1 mr-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
                    style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
                  >
                    <option value="en">Select Language</option>
                    <option value="en">English</option>
                    
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>

                
                  <div className="mb-4 xs:hidden">
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
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 xs:mb-4"
                    >
                      Download MP3
                    </button>
                  )}
               
              </div>
              <div className='relative mr-6 w-full lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
                <Link to="/webview">
                <button
                    
                      className="bg-[#008CD2] text-white w-full  font-medium text-[16px] inter_ff py-4 px-4 rounded-3xl"
                  >
                  Start Creating
                  </button>
                </Link>
                 
                </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}
export default Mobileview;