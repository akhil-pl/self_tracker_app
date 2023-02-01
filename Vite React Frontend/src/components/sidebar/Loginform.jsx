import React, {useState} from 'react'

function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { "email": `${email}`, "password": `${password}` };
        console.log(data)
        const url = "http://localhost:8080/login?include_auth_token"
        await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => window.localStorage.setItem("auth_token", data.response.user.authentication_token))
            .then(function(){window.localStorage.setItem("email", `${email}`)})
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            Loginform
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input required type="email" name='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input required type="password" name='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Loginform