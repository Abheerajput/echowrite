// src/components/Loader.js
import React from 'react';
import "./loader.css"; 

const Spinner = () => {
  return (
    <div >
     <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-6 h-6 animate-spin"></div>
    </div>
  );
};

export default Spinner
