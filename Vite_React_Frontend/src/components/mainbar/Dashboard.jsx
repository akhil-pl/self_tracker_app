import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import Trackerlist from './Trackerlist';
import TrackerDetails from './TrackerDetails';

function Dashboard() {
    useEffect(() => {
        getEmail();
        getUserTrackers();
    }, []);


    const [email, setEmail] = useState("");
    const [userTrackers, setUserTrackers] = useState([]);
    const [viewTracker, setViewTracker] = useState("")

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
            <DashboardLogin>
                <Trackerlist userTrackers={userTrackers} setViewTracker={setViewTracker} />
                <TrackerDetails viewTracker={viewTracker} />
            </DashboardLogin>
        )
    }
    return (
        <DashboardNotLogin>
            <h1>Please Register or Login</h1>
        </DashboardNotLogin>
    )
}

const DashboardNotLogin = styled.div`
    background-color: aqua;
    height: 90%;
`;
const DashboardLogin = styled.div`
    height: 90%;
    display: grid;
    grid-template-columns: 20% 80%;
`;


export default Dashboard