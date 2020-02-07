import React from 'react';
import Navbar from './system/navbar';
import Desktop from './system/desktop'
import Login from './system/login';
import '../App.css';

function App() {
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
