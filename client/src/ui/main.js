import React from 'react';
import Navbar from './system/navbar';
import setBackground from './system/utils/background';
import Desktop from './system/desktop'
import Login from './system/login';
import '../App.css';

function App() {
    setBackground();

    if(global.user === undefined){
        return (
            <Login />
        )
    } else {
        return (
            <>
                <Desktop />
                <Navbar />
            </>
        );
    }
}

export default App;
