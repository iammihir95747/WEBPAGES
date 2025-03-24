import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Students from './Pages/Students';
import Homepage from './components/Homepage';
import Profile from './Auth/Profile';
import Services from './components/Services';
import Category from './Auth/Category';

function Layout() {
    const location = useLocation();
    const hideHome = location.pathname === '/category'; // Hide Home on /category

    return (
        <>
            {!hideHome && <Home />}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Students" element={<Students />} />
                <Route path="/category" element={<Category />} />
            </Routes>
        </>
    );
}

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

export default App;
