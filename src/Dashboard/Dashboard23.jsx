import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Navbar from './Navbar';

const Dashboard23 = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // State to hold interval ID
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startTimer = () => {
    // Start the timer
    setTimer(0); // Reset timer to 0
    const id = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000); // Update timer every second

    // Start speech recognition
    SpeechRecognition.startListening();

    // Store the interval ID in state
    setIntervalId(id);
  };

  const stopTimer = () => {
    // Stop the timer
    clearInterval(intervalId);

    // Stop speech recognition
    SpeechRecognition.stopListening();
  };

  const resetTranscriptAndTimer = () => {
    // Reset transcript and timer
    resetTranscript();
    setTimer(0);
  };

  const downloadTranscript = () => {
    // Create a Blob from the recognized transcript
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'recorded_text.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const dashboard23Links = [
    { name: 'FAQ', path: '#' },
    { name: 'Next', path: '/dashboard0' }, 
    { name: 'Support', path: '#' },
  ];

  return (
    <div>
      <Navbar links={dashboard23Links} />
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p>Timer: {timer} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTranscriptAndTimer}>Reset</button>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
        <p>{transcript}</p>
      </div>
      {transcript && (
        <button onClick={downloadTranscript} style={{ marginTop: '10px' }}>Download Transcript</button>
      )}
    </div>
  );
};

export default Dashboard23;
