import React, {useState} from 'react'
import './Signup.css'


const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');  
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass, name)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='John Doe ' id='name' name='name' />
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@example.com' id='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********* ' id='password' name='password' />
            <button type='submit'>Signup</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account</button>
        </>
    )
}

export default Signup;