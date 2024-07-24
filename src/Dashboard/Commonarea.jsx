import React, { useEffect, useState, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const SpeechToTextEditor = () => {
  const [recognition, setRecognition] = useState(null);
  const [finalTranscript, setFinalTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const quillRef = useRef(null);

  useEffect(() => {
    // Initialize Quill editor
    quillRef.current = new Quill('#editor', {
      theme: 'snow'
    });

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = language;

      recognitionInstance.onstart = () => setIsRecording(true);
      recognitionInstance.onend = () => setIsRecording(false);

      recognitionInstance.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setFinalTranscript((prev) => prev + formatTranscript(transcript) + ' ');
          } else {
            interimTranscript += formatTranscript(transcript);
          }
        }
        if (quillRef.current) {
          quillRef.current.setText(finalTranscript + interimTranscript);
        }
      };

      setRecognition(recognitionInstance);
    } else {
      console.error('Speech Recognition not supported');
    }

    // Cleanup on component unmount
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [language, recognition]);

  const formatTranscript = (transcript) => {
    return transcript.replace(/full stop/gi, '.')
                     .replace(/comma/gi, ',')
                     .replace(/next line/gi, '\n')
                     .replace(/next paragraph/gi, '\n\n');
  };

  const startRecording = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const speakText = () => {
    const textToSpeak = quillRef.current.getText();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h1>Speech to Text and Text Editor</h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
      >
        <option value="en-US">English (US)</option>
        <option value="en-GB">English (UK)</option>
        <option value="es-ES">Spanish (Spain)</option>
        <option value="fr-FR">French</option>
        <option value="de-DE">German</option>
        <option value="hi-IN">Hindi</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={startRecording} disabled={isRecording} style={buttonStyle}>Start Recording</button>
      <button onClick={stopRecording} disabled={!isRecording} style={buttonStyle}>Stop Recording</button>
      <button onClick={speakText} style={buttonStyle}>Speak Text</button>
      <div id="editor" style={editorStyle}></div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#6200ea',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px',
  fontSize: '16px'
};

const editorStyle = {
  height: '300px',
  marginTop: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  background: 'white'
};

export default SpeechToTextEditor;
