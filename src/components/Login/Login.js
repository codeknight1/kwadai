import React, {useState} from 'react'
import './Style.css'


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@example.com' id='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********* ' id='password' name='password' />
            <button type='submit'>Log in</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Dont Have an account</button>
        </>
    )
}

export default Login;