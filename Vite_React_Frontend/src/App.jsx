import React, { useEffect, useState } from 'react'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Mainbar from './components/mainbar/Mainbar'

function App() {
    useEffect(() => {
        getUser();
    }, []);

    const [user, setUser] = useState({});

    const getUser = async () => {
        const email = window.localStorage.getItem("email")
        const token = window.localStorage.getItem("auth_token")
        if (email) {
            const url = "http://localhost:8080/user/" + email
            await fetch(url, { headers: { 'Content-Type': 'application/json', 'Authentication-Token': token } }) //Fetching current user details from database
                .then(response => response.json())
                .then(data => setUser(data))
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div className="App" id='App'>
            <Sidebar user={user} setUser={setUser} />
            <Mainbar /> 
        </div>
    )
}

export default App
