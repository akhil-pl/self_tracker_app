import React, { useEffect, useState } from 'react'

import './Sidebar.css'
import RegisterForm from './RegisterForm'
import Loginform from './Loginform'
import Logedin from './Logedin'

function Sidebar(props) {
    useEffect(() => {
        getEmail();
    }, []);


    const [email, setEmail] = useState("");
    const [registerForm, setRegisterForm] = useState(false);
    const [loginForm, setLoginForm] = useState(false);

    const getEmail = async () => {
        const email = window.localStorage.getItem("email")
        if (email) {
            (function () { setEmail(email) }()) //IIFE
        }
    };
    const viewRegisterForm = () => {
        setRegisterForm((prev) => !prev);
        setLoginForm(false);
    };
    const viewLoginForm = () => {
        setLoginForm((prev) => !prev);
        setRegisterForm(false);
    }


    if (email) {
        return (
            <div className='Sidebar'>
                Sidebar
                <Logedin user={props.user} />
            </div>
        )
    }
    return (
        <div className='Sidebar'>
            Sidebar
            <button onClick={viewRegisterForm}>Register</button>
            <button onClick={viewLoginForm}>Login</button>
            {loginForm ? <Loginform /> : ""}
            {registerForm ? <RegisterForm /> : ""}
        </div>
    )
}

export default Sidebar