import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Placements from './pages/Placements';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
    
function App() {
    return (
      <div>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
            </Routes>
            <Footer />
        </Router>
      </div>
    );
}
    
    

export default App;
