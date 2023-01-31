import React, {useState} from 'react'

function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [object, setObject] = useState(null);
    const [auth_token, setAuth_token] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
        const em= `${email}`;
        const ps = `${password}`;
        const data = { "email": em, "password": ps };
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
            .then(data => setObject(data['response']))
            .catch((error) => {
                console.error('Error:', error);
            });  
        // const user = this.state.object['user'];
        console.log({object})
        // const user = {object['user']};
        let x = setAuth_token(user['authentication_token']);
        console.log(`${auth_token}`);
        const key = "auth_token"
        window.localStorage.setItem(key, this.auth_token);
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