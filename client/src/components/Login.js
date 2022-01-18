import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/user'

const Login = () => {
    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error ] = useState("")
    const {login} = useContext(UserContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            login(user)
            navigate('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form >
            <ul>
                <h3>{error}</h3>
            </ul>
        </div>
    )
}

export default Login
