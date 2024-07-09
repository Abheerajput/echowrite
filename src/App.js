import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Login';
import Signup from './components/Signin';
import "slick-carousel/slick/slick.css";
import './App.css';
import "slick-carousel/slick/slick-theme.css";
import Homepage from './components/Homepage';
import Dashboard from './Dashboard/Dashboard';
import Dashboard2 from './Dashboard/Dashboard2';
import Dashboard3 from './Dashboard/Dashboard3';
import Dashboard4 from './Dashboard/Dashboard4';
import Dashboard5 from './Dashboard/Dashboard5';
import Dashboard23 from './Dashboard/Dashboard23';
// import Transcription from './components/Transcription';
// import Message from './components/Message';


const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

const AppContent = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase();
    const isDashboardRoute = pathname.includes('/dashboard');

    return (
        <div>
            { pathname !== '/login' && pathname !== '/signup' && !isDashboardRoute && <Navbar />}
          
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard2" element={<Dashboard2 />} />
                <Route path="/dashboard3" element={<Dashboard3 />} />
                <Route path="/dashboard4" element={<Dashboard4 />} />
                <Route path="/dashboard5" element={<Dashboard5 />} />
                <Route path="/dashboard0" element={<Dashboard23 />} />
                {/* <Route path="/faq" element={<Transcription />} />
                <Route path="/contact" element={<Message />} /> */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
// import Navbar from "./components/Navbar/Navbar";
// import Login from './components/Login';
// import Signup from './components/Signin';
// import "slick-carousel/slick/slick.css";
// import './App.css';
// import "slick-carousel/slick/slick-theme.css";
// import Homepage from './components/Homepage';
// import Dashboard from './Dashboard/Dashboard';
// import Dashboard2 from './Dashboard/Dashboard2';
// import Dashboard3 from './Dashboard/Dashboard3';
// import Dashboard4 from './Dashboard/Dashboard4';

// const App = () => {
//     return (
//         <Router>
//             <AppContent />
//         </Router>
//     );
// };

// const AppContent = () => {
//     const location = useLocation();

//     return (
//         <div>
//             {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/Dashboard' && location.pathname !== '/Dashboard2' && location.pathname !== '/Dashboard3' && location.pathname !== '/Dashboard4' && <Navbar />}
          
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/Dashboard" element={<Dashboard />} />
//                 <Route path="/Dashboard2" element={<Dashboard2 />} />
//                 <Route path="/Dashboard3" element={<Dashboard3 />} />
//                 <Route path="/Dashboard4" element={<Dashboard4 />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<Homepage />} />
//                 <Route path="/" element={<Navigate to="/home" />} />
//                 <Route path="*" element={<Navigate to="/home" />} />
//             </Routes>
//         </div>
//     );
// };

// export default App;
