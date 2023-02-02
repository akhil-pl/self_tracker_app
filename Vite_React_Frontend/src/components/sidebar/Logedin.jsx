import React from 'react'

function Logedin(props) {

    const Logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:5173';
    }


    return (
        <div>
            <button onClick={Logout}>Logout</button>
            <h1>{props.user.uname}</h1>
            <h2>{props.user.email}</h2>
            <h3>Sex: {props.user.gender}</h3>
            <h4>DOB: {props.user.dob}</h4>
        </div>
    )


}

export default Logedin