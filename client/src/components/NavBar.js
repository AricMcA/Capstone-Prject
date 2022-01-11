import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = () => {

    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn && user) {
        return (
            <div className="space-x-2">
                <h3>Welcome {user.name}...</h3>
                <br/>
                <button onClick={logoutUser} className="p-2 bg-cyan-400 rounded-md">Logout</button>
                <NavLink to="/games">
                    <button className="p-2 bg-cyan-400 rounded-md">Games</button>
                </NavLink>
                <NavLink to="/user/consoles">
                    <button className="p-2 bg-cyan-400 rounded-md">My Consoles</button>
                </NavLink>
                <NavLink to="/consoles">
                    <button className="p-2 bg-cyan-400 rounded-md">Consoles</button>
                </NavLink>
                <hr className="mt-2"/>
            </div>
        )
    } else{
        return (
            <div className="space-x-2">
                <NavLink to="/login">
                    <button className="p-2 bg-cyan-400 rounded-md">Login</button>
                </NavLink>
                <NavLink to="/signup">
                    <button className="p-2 bg-cyan-400 rounded-md">Signup</button>
                </NavLink>
                <NavLink to="/consoles">
                    <button className="p-2 bg-cyan-400 rounded-md">Consoles</button>
                </NavLink>
                <hr className="mt-2"/>
            </div>
        )
    }
}


export default NavBar
