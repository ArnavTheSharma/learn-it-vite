import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./LoginPage.css";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async() => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/events');
        } catch (error) {
            setError(error.message);
        }
    }

    return(
        <div className="loginContainer">
            <div className="box">
                <h1 className='pageTitle' style={{"text-align": "start"}}>Login to your Account</h1>
                {error && <p className="error">{error}</p>}
                <input 
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}  /> 
                <input 
                    placeholder="Your password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} /> 
                <button onClick={logIn}>Log In</button>
                <Link to='/create-account'>Don't have an account? Create one here</Link>
            </div>
        </div>
    )
}

export default LoginPage;