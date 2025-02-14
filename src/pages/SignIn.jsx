import React, { useState } from 'react';
import '../styles/signin.css';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const verify = (e) => {
        e.preventDefault();
        if (username === 'example@gmail.com' && password === 'example') {
            setIsAuthenticated(true);
            navigate('/LoginPageReact/home')
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="maincontent">
        <div className="signin-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={verify}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="btn"  type="submit">Sign In</button>
            </form>
        </div>
        </div>
    );
}
