import React from 'react';
import Navbar from './system/navbar';
import setBackground from './system/background';
import '../App.css';

function App() {
    setBackground();
    
    return (
        <>
            <Navbar />
        </>
    );
}

export default App;
