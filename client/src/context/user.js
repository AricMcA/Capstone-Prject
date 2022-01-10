import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ consoles, setConsoles ] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })
    },[])

    useEffect(() => {
        fetch('/consoles')
        .then(res => res.json())
        .then(data => setConsoles(data))
    })

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, consoles}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
