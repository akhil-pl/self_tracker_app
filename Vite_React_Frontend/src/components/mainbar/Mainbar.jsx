import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './Mainbar.css'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';

const Mainbar = () => {
    useEffect(() => {
        getEmail();
        getUserTrackers();
    }, []);


    const [email, setEmail] = useState("");
    const [userTrackers, setUserTrackers] = useState([]);
    
    const getEmail = async () => {
        const email = window.localStorage.getItem("email")
        if (email) {
            (function () { setEmail(email) }()) //IIFE
        }
    };
    const getUserTrackers = async () => {
        const email = window.localStorage.getItem("email")
        const token = window.localStorage.getItem("auth_token")
        if (email) {
            const url = "http://localhost:8080/user/" + email
            await fetch(url, { headers: { 'Content-Type': 'application/json', 'Authentication-Token': token } }) //Fetching current user details from database
                .then(response => response.json())
                .then(data => setUserTrackers(data.trackers))
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    if (email) {
        return (
            <div className='Mainbar'>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </BrowserRouter>
                {userTrackers.map((tracker) => {
                    return (
                        <div key={tracker.tid}>
                            <p>{tracker.tname}: {tracker.description} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <MainbarNotLogin>
            <h1>Please Register or Login</h1>
        </MainbarNotLogin>
    )
}

const MainbarNotLogin = styled.div`
    background-color: aqua;
    height: 100vh;
`;

export default Mainbar