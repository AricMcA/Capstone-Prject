import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/user'
import { useNavigate}  from 'react-router-dom'

const Signup = () => {

    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("")
    const [ errorsList, setErrorsList ] = useState("")
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/')
            } else{
                setName("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }
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
                <label>Confirm Password:</label>
                <input type='password' id='password_confirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup