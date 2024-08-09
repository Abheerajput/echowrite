import React, { useState, useEffect, useRef, useMemo } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import JoditEditor from "jodit-react";
import WaveSurfer from "wavesurfer.js";
import soundwave from "../assets/svg/soundwave.svg";
import mike from "../assets/svg/mikeicon.svg";
import playicon from "../assets/svg/playicon.svg";
import pauseicon from "../assets/svg/pauseicon.svg";
import html2canvas from "html2canvas";
import Download_icon from "../assets/svg/Download_icon.svg";
import Upload_icon from "../assets/svg/Upload_icon.svg";
import axios from "axios";
import { BASE_URL } from "../config.js";

const Dashboard2 = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [remainingMinutes, setRemainingMinutes] = useState(1000);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [stream, setStream] = useState(null);
  const [recognizedText, setRecognizedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [textContent, setTextContent] = useState("");
  const [showUploadButton, setShowUploadButton] = useState(true);
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedFormat, setSelectedFormat] = useState("pdf");
  const [showRecordingControls, setShowRecordingControls] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const editorConfig = useMemo(() => {
    return {
      height: 400,
      uploader: {
        insertImageAsBase64URI: true,
        url: "/upload_image",
        filesVariableName: function (i) {
          return "images[" + i + "]";
        },

        format: "json",
        method: "POST",
        process: function (resp) {
          return {
            files: resp.files.map((file) => file.url),
          };
        },
        error: function (e) {
          console.error("Error uploading image:", e);
        },
      },
      filebrowser: {
        ajax: {
          url: "/browse_images", 
        },
        uploader: {
          insertImageAsBase64URI: true,
        },
      },
    };
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
    
      const response = await axios.post(`${BASE_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data;
      if (data.success === "true") {
        setFileUrl(data.fileUrl);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log(`error ${error}`);
      alert("Error uploading file");
    }
  };
  useEffect(() => {
    if (recordingStarted && remainingMinutes > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prev) => prev + 1);
        setRemainingMinutes((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [recordingStarted, remainingMinutes]);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#ff5500",
        cursorColor: "#ff5500",
        barWidth: 2,
        barHeight: 1,
        responsive: true,
        height: 100,
      });
      return () => wavesurfer.current.destroy();
    }
  }, []);

  useEffect(() => {
    if (listening) {
      setRecognizedText(transcript);
    }
  }, [transcript, listening]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Uploaded files:", files);
  };

  const handleConvert = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement("a");
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

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        setStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);

        mediaRecorder.start();
        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            const blob = new Blob([event.data], { type: "audio/webm" });
            setAudioBlob(blob);
          }
        };
      })
      .catch((error) => console.error("Error accessing media devices:", error));
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
    setRecognizedText("");
    resetTranscript();
    setShowRecordingControls(false); // Hide recording controls

    if (mediaRecorder) {
      mediaRecorder.stop();
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
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
      const response = await axios.post("/api/translate", {
        text,
        target_lang: language,
      });

      return response.data.translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  };
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleUploadDocument = async () => {
    const htmlContent = document.querySelector(".jodit-wysiwyg");
    let documentBlob = null;

    if (selectedFormat === "pdf") {
      const canvas = await html2canvas(htmlContent);
      const doc = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      documentBlob = doc.output("blob");
    } else if (selectedFormat === "docx") {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun(stripHtmlTags(textContent))],
              }),
            ],
          },
        ],
      });

      documentBlob = await Packer.toBlob(doc);
    }

    if (documentBlob) {
      const formData = new FormData();
      formData.append("file", documentBlob, `document.${selectedFormat}`);

      try {
        const response = await axios.post(`${BASE_URL}/api/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const data = response.data;
        if (data.success === "true") {
          setFileUrl(data.fileUrl);
          setIsDocumentUploaded(true); // Set isDocumentUploaded to true
          console.log("isDocumentUploaded:", isDocumentUploaded); // Add this line
          setShowUploadButton(false); // Hide the Upload button
          // Hide the Upload button
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error uploading document:", error);
        alert("Error uploading document");
      }
    }
  };

  const handleDownloadDocument = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = `document.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownload = () => {
    const plainTextContent = stripHtmlTags(textContent);
    const htmlContent = document.querySelector(".jodit-wysiwyg"); // Use querySelector to select the editor content

    if (selectedFormat === "pdf") {
      html2canvas(htmlContent).then((canvas) => {
        const doc = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position -= pageHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save("document.pdf");
      });
    } else if (selectedFormat === "docx") {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({ children: [new TextRun(plainTextContent)] }),
            ],
          },
        ],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "document.docx");
      });
    }
  };

  return (
    <>
      <div className="xs:h-screen h-screen px-2 bg-[#F4F7FA]">
        <div className="">
          <div className="bg-[#F4F7FA] border-0 rounded-lg pt-10 ">
            <div
              className="border-0 border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
            >
              <div className="flex flex-col w-full xs:flex xs:flex-col xs:justify-around">
                <div className="flex lg:py-2 xl:py-2 md:py-8 xs:flex xs:flex-col xs:justify-around">
                  <div className="flex flex-col w-3/5 rounded-3xl pb-0 xs:w-full shadow-lg border-0">
                    <div className="xs:pb-0 border-0">
                      <div className="h-96 border-0 border-r-white">
                        <JoditEditor
                          config={editorConfig}
                          value={recognizedText}
                          onChange={(newContent) => setTextContent(newContent)}
                        />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F4F7FA]">
                  <p className="pt-10 w-full flex justify-center">
                    <img src={soundwave} alt="" />
                  </p>
                  <p className="font-bold text-2xl mt-6">00.{timer}mins</p>
                  <div className="flex justify-center space-x-8 mt-4 mb-4">
                    {!showRecordingControls ? (
                      <button
                        className=" max-w-[320px] w-full font-semibold py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={handleStartRecording}
                      >
                        Start
                      </button>
                    ) : (
                      <div
                        id="handlerecording"
                        className="flex justify-center items-center space-x-8 xs:w-full"
                      >
                        <button onClick={handlePlayClick}>
                          <img
                            src={isPlaying ? pauseicon : playicon}
                            alt="Play/Pause"
                            className="w-13 h-13"
                          />
                        </button>
                        <button
                          className="py-3 px-7 text-white bg-red-500 max-w-[190px] w-full rounded-full h-12"
                          onClick={handleReset}
                        >
                          Stop
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[#808080] text-[15px] font-normal mb-4"
                      htmlFor="format"
                    >
                      Output Format
                    </label>
                    <select
                      id="format"
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="border bg-gray-200 border-gray-300 text-[#808080] text-[15px] inter_ff xs:w-[310px] w-[151px] font-normal rounded-md px-5 py-3 focus:outline-none focus:ring-blue-500 focus:ring-1 "
                      style={{
                        padding: "9px 16px 9px 16px",
                        borderRadius: "10px",
                      }}
                    >
                      <option value="pdf">PDF</option>
                      <option value="docx">DOCX</option>
                      {/* Add more formats as needed */}
                    </select>
                  </div>
                  <div className="flex justify-between px-5 mt-9 md:hidden lg:hidden">
                    {/* <button
                      onClick={handleUploadDocument}
                      className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4"
                    >
                      Upload Document
                    </button> */}
                    <div className="text-center">
                      <div className="d-flex justify-center ">
                        <img
                          className="mx-auto"
                          onClick={handleUploadDocument}
                          width={60}
                          src={Upload_icon}
                          alt=""
                        />
                      </div>
                      <p className=" font-sans mt-2 text-base font-semibold ">
                        Upload Document
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="d-flex justify-center ">
                        <img
                          className="mx-auto"
                          onClick={handleDownload}
                          width={60}
                          src={Download_icon}
                          alt=""
                        />
                      </div>
                      <p className=" font-sans mt-2 text-base font-semibold ">
                        Download Document
                      </p>
                    </div>
                    {/* <button
                      onClick={handleDownload}
                      className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4"
                    >
                      Download Document
                    </button> */}
                  </div>

                  <p className="w-100 bg-[#F4F7FA] mb-4 mt-7">
                    {audioBlob && (
                      <button
                        onClick={handleConvert}
                        className="bg-blue-500 hover:bg-blue-700 text-white max-w-[310px] w-full font-bold py-2 px-4  rounded-full mt-4 xs:mb-4"
                      >
                        Download
                      </button>
                    )}
                  </p>
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

// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import jsPDF from 'jspdf';
// import { Document, Packer, Paragraph, TextRun } from 'docx';
// import { saveAs } from 'file-saver';
// import JoditEditor from 'jodit-react';
// // import keyword from "../assets/svg/keyword.svg"
// import WaveSurfer from 'wavesurfer.js';
// import soundwave from "../assets/svg/soundwave.svg"
// import mike from "../assets/svg/mikeicon.svg";
// import playicon from "../assets/svg/playicon.svg";
// import pauseicon from "../assets/svg/pauseicon.svg";
// import html2canvas from 'html2canvas';
// // import Navbar from './Navbar';
// import axios from 'axios';
// // import { BASE_URL } from "../config.js"

// const Dashboard2 = () => {
//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState('');
//   const [remainingMinutes, setRemainingMinutes] = useState(1000);
//   const [recordingStarted, setRecordingStarted] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [stream, setStream] = useState(null);
//   const [recognizedText, setRecognizedText] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showInstruction, setShowInstruction] = useState(true);
//   const [textContent, setTextContent] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const [selectedFormat, setSelectedFormat] = useState('pdf');
//   const [showRecordingControls, setShowRecordingControls] = useState(false);
//   const waveformRef = useRef(null);
//   const wavesurfer = useRef(null);
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };
//   const editorConfig = useMemo(() => {

//     return {
//       height: 400,
//       uploader: {
//         insertImageAsBase64URI: true,
//         url: '/upload_image',
//         filesVariableName: function (i) {
//           return 'images[' + i + ']';
//         },

//         format: 'json',
//         method: 'POST',
//         process: function (resp) {
//           return {
//             files: resp.files.map(file => file.url)
//           };
//         },
//         error: function (e) {
//           console.error('Error uploading image:', e);
//         }
//       },
//       filebrowser: {
//         ajax: {
//           url: '/browse_images' // Replace with your image browse URL
//         },
//         uploader: {
//           insertImageAsBase64URI: true
//         }
//       }
//     };
//   }, []); // empty dependency array

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       // const response = await axios.post(`${BASE_URL}/upload`, formData, {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const data = response.data;
//       if (data.success==="true") {

//         setFileUrl(data.fileUrl);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       console.log(`error ${error}`)
//       alert('Error uploading file');
//     }
//   };
//   useEffect(() => {
//     if (recordingStarted && remainingMinutes > 0) {
//       const timerInterval = setInterval(() => {
//         setTimer(prev => prev + 1);
//         setRemainingMinutes(prev => prev - 1);
//       }, 1000);

//       return () => clearInterval(timerInterval);
//     }
//   }, [recordingStarted, remainingMinutes]);

//   useEffect(() => {
//     if (waveformRef.current) {
//       wavesurfer.current = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: '#ddd',
//         progressColor: '#ff5500',
//         cursorColor: '#ff5500',
//         barWidth: 2,
//         barHeight: 1,
//         responsive: true,
//         height: 100,
//       });
//       return () => wavesurfer.current.destroy();
//     }
//   }, []);

//   useEffect(() => {
//     if (listening) {
//       setRecognizedText(transcript);
//     }
//   }, [transcript, listening]);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     console.log('Uploaded files:', files);
//   };

//   const handleConvert = () => {
//     if (audioBlob) {
//       const url = URL.createObjectURL(audioBlob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `recorded-speech-${timer}secs.mp3`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     }
//   };

//   const handleStartRecording = () => {
//     resetTranscript();
//     SpeechRecognition.startListening({ continuous: true });
//     setRecordingStarted(true);
//     setIsPlaying(true);
//     setShowInstruction(false); // Hide instruction text
//     setTimer(0);
//     setShowRecordingControls(true); // Show recording controls

//     navigator.mediaDevices.getUserMedia({ audio: true, video: false })
//       .then(stream => {
//         setStream(stream);
//         const mediaRecorder = new MediaRecorder(stream);
//         setMediaRecorder(mediaRecorder);

//         mediaRecorder.start();
//         mediaRecorder.ondataavailable = event => {
//           if (event.data && event.data.size > 0) {
//             const blob = new Blob([event.data], { type: 'audio/webm' });
//             setAudioBlob(blob);
//           }
//         };
//       })
//       .catch(error => console.error('Error accessing media devices:', error));
//   };

//   const handlePauseRecording = () => {
//     SpeechRecognition.stopListening();
//     setRecordingStarted(false);
//     setIsPlaying(false);
//     if (mediaRecorder) {
//       mediaRecorder.pause();
//     }
//   };

//   const handleResumeRecording = () => {
//     SpeechRecognition.startListening({ continuous: true });
//     setRecordingStarted(true);
//     setIsPlaying(true);
//     if (mediaRecorder) {
//       mediaRecorder.resume();
//     }
//   };

//   const handlePlayClick = () => {
//     if (recordingStarted) {
//       handlePauseRecording();
//     } else {
//       handleResumeRecording();
//     }
//   };

//   const handleReset = () => {
//     setRecordingStarted(false);
//     setShowInstruction(true); // Show instruction text
//     setTimer(0);
//     setAudioBlob(null);
//     setRecognizedText('');
//     resetTranscript();
//     setShowRecordingControls(false); // Hide recording controls

//     if (mediaRecorder) {
//       mediaRecorder.stop();
//     }

//     if (stream) {
//       stream.getTracks().forEach(track => track.stop());
//     }
//   };

//   const handleLanguageChange = async (e) => {
//     const newLanguage = e.target.value;
//     setSelectedLanguage(newLanguage);

//     const translatedText = await translateText(textContent, newLanguage);
//     setTextContent(translatedText);
//   };

//   const translateText = async (text, language) => {
//     try {
//       const response = await axios.post('/api/translate', {
//         text,
//         target_lang: language
//       });

//       return response.data.translatedText;
//     } catch (error) {
//       console.error('Error translating text:', error);
//       return text;
//     }
//   };
//   const stripHtmlTags = (html) => {
//     const div = document.createElement('div');
//     div.innerHTML = html;
//     return div.textContent || div.innerText || '';
//   };
//   const handleDownload = () => {
//     const plainTextContent = stripHtmlTags(textContent);
//     const htmlContent = document.querySelector('.jodit-wysiwyg'); // Use querySelector to select the editor content

//     if (selectedFormat === 'pdf') {
//       html2canvas(htmlContent).then(canvas => {
//         const doc = new jsPDF();
//         const imgData = canvas.toDataURL('image/png');
//         const imgWidth = 210; // A4 width in mm
//         const pageHeight = 295; // A4 height in mm
//         const imgHeight = canvas.height * imgWidth / canvas.width;
//         let heightLeft = imgHeight;

//         let position = 0;

//         doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;

//         while (heightLeft >= 0) {
//           position -= pageHeight;
//           doc.addPage();
//           doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//           heightLeft -= pageHeight;
//         }

//         doc.save('document.pdf');
//       });
//     } else if (selectedFormat === 'docx') {
//       const doc = new Document({
//         sections: [
//           {
//             properties: {},
//             children: [
//               new Paragraph({
//                 children: [
//                   new TextRun(plainTextContent)
//                 ]
//               })
//             ]
//           }
//         ]
//       });

//       Packer.toBlob(doc).then(blob => {
//         saveAs(blob, 'document.docx');
//       });
//     }
//   };

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <>

//       <div className="  xs:h-screen h-screen px-2  bg-[#F4F7FA] ">

//         <div className="  ">
//           <div className="bg-[#F4F7FA] border-0 rounded-lg pt-10 ">

//           <div className="border-0   border-gray-300 rounded-lg w-full flex text-center xs:flex xs:flex-col xs:gap-4 xs:justify-around cursor-pointer" onDragOver={(e) => e.preventDefault()} onDrop={handleFileDrop}>
//             <div className='flex flex-col w-full xs:flex xs:flex-col xs:justify-around'>
//               <div className='flex lg:py-2 xl:py-2 md:py-8 xs:flex xs:flex-col xs:justify-around'>
//                 <div className='flex flex-col items-center w-2/5 xs:hidden bg-[#F4F7FA]  xs:flex-col xs:pb-2 xs:justify-around xs:w-full xs:mb-2'>
//                   <p className='flex justify-center'> <img className='w-24 h-24' src={mike} alt="Microphone" />  </p>
//                   <p className='font-bold text-2xl'>   00.{timer}mins   </p>
//                   {showInstruction && (
//                     <p className='text-[18px] inter_ff text-black font-bold text-center'>
//                       Start Speaking We’ll Convert <br /> your Voice to Text
//                     </p>
//                   )}
//                   <div className="flex justify-center space-x-8 mt-4 mb-4">
//                     {!showRecordingControls ? (
//                       <button
//                         className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//                         onClick={handleStartRecording}
//                       >
//                         Start
//                       </button>
//                     ) : (
//                       <div id="handlerecording" className="flex justify-center items-center space-x-8 xs:w-full">
//                         <button onClick={handlePlayClick}>
//                           <img src={isPlaying ? pauseicon : playicon} alt="Play/Pause" className="w-8 h-8" />
//                         </button>
//                         <button
//                           className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
//                           onClick={handleReset}
//                         >
//                           Stop
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className='flex flex-col w-3/5 rounded-3xl  pb-0  xs:w-full shadow-lg  border-0'>
//                   <div className=' xs:pb-0 border-0'>
//                     <div className="h-96 border-0 border-r-white">
//                       <JoditEditor
//                         config={editorConfig}
//                         value={recognizedText}
//                         onChange={newContent => setTextContent(newContent)}
//                       />
//                       <div>

//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               <div className='bg-[#F4F7FA]'>
//                 <p className='pt-10 w-full flex justify-center'>
//                 <img src={soundwave} alt="" />

//                 </p>

//                 <p className='font-bold text-2xl mt-14'>
//                   00.{timer}mins
//                 </p>
//                 <div className="flex justify-center space-x-8 mt-4 mb-4">
//                   {!showRecordingControls ? (
//                     <button
//                       className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//                       onClick={handleStartRecording}
//                     >
//                       Start
//                     </button>
//                   ) : (
//                     <div id="handlerecording" className="flex justify-center items-center space-x-8 xs:w-full">
//                       <button onClick={handlePlayClick}>
//                         <img src={isPlaying ? pauseicon : playicon} alt="Play/Pause" className="w-13 h-13" />
//                       </button>
//                       <button
//                         className=" py-3 text-white bg-red-500 w-1/3 rounded-full h-12 "
//                         onClick={handleReset}
//                       >
//                         Stop
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-[#808080] text-[15px] font-normal mb-2" htmlFor="format">Output Format</label>
//                   <select
//                     id="format"
//                     value={selectedFormat}
//                     onChange={(e) => setSelectedFormat(e.target.value)}
//                          className="border bg-gray-200 border-gray-300  text-[#808080] text-[15px] inter_ff xs:w-[100px]  w-[151px] font-normal rounded-md px-5 py-1 focus:outline-none focus:ring-blue-500 focus:ring-1 mr-[2%]"
//                          style={{ padding: "4px 12px 4px 12px", borderRadius: "7px" }}
//                   >
//                     <option value="pdf">PDF</option>
//                     <option value="docx">DOCX</option>
//                     {/* Add more formats as needed */}
//                   </select>
//                   </div>
//                   <div className='relative mr-6 lg:mr-6 md:mr-6 xl:mr-6 xs:mr-0 xs:w-auto'>
//                   <button
//                     onClick={handleDownload}
//                       className="bg-[#E4E4E4] text-[#808080] font-medium text-[15px] inter_ff py-2 px-4 rounded-2xl"
//                   >
//                     Download Document
//                   </button>
//                 </div>

//        <p className='w-100 bg-[#F4F7FA] mb-4 '>
//        {audioBlob && (
//   <button
//     onClick={handleConvert}
//     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 xs:mb-4"
//   >
//     Download
//   </button>
// )}
//        </p>
//        <div>

//       <form onSubmit={handleSubmit}>
//         <input type="file" name="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {fileUrl && (
//         <div id="fileLink">
//           <a href={fileUrl} download>
//             Download File
//           </a>
//         </div>
//       )}
//     </div>

//               </div>

//             </div>
//           </div>
//           </div>

//         </div>
//       </div>

//     </>
//   )
// }

// export default Dashboard2;
