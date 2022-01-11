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
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </div>
    )
}

export default Login
