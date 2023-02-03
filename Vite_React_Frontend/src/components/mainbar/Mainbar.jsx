import React, { useEffect, useState } from 'react'

import './Mainbar.css'

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
                Mainbar
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
        <div className='Mainbar'>
            Mainbar
            Please Register or Login
        </div>
    )
}

export default Mainbar