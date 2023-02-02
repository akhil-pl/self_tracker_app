import React, {useEffect, useState} from 'react'

function Logedin() {
    useEffect(() => {
        getUser();
    }, []);

    const [user, setUser] = useState({});

    const getUser = async () => {
        const email = window.localStorage.getItem("email")
        const token = window.localStorage.getItem("auth_token")
        const url = "http://localhost:8080/user/"+email
        await fetch(url, {headers: {'Content-Type': 'application/json', 'Authentication-Token': token} } ) //Fetching current user details from database
        .then(response => response.json())
        .then(data => setUser(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    if (user){
        return (
            <div>
                <h1>{user.uname}</h1>
                <h2>{user.email}</h2>
                <h3>Sex: {user.gender}</h3>
                <h4>DOB: {user.dob}</h4>
            </div>
        )
    }
    return(
        <div>Please login</div>
    )
    
}

export default Logedin