import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ consoles, setConsoles ] = useState([])
    const [ userConsoles, setUserConsoles ] = useState([])
    const [ games, setGames ] = useState([])

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
    },[])

    useEffect(() => {
        fetch('/user/consoles')
        .then(res => res.json())
        .then(data => setUserConsoles(data))
    },[])

    useEffect(() => {
        fetch('/games')
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    const deleteGame = (id) => {
        fetch(`/games/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(() => {
            const newGames = games.filter(g => g.id !== id)
            setGames(newGames)
        })
    }

    const editGame = (game) => {
        fetch(`/games/${game.id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(game => {
            const newGames = games.filter(g => g.id !== game.id)
            const updatedGames = [...newGames, game]
            setGames(updatedGames)
        })
    }

    const addGame = (game) => {
        fetch('/games', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(data => {
            setGames([...games, data])
        })
    }

    const addConsole = (console) => {
        fetch('/consoles', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(console)
        })
        .then(res => res.json())
        .then(data => {
            setConsoles([...consoles, data])
        })
    }

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
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, consoles, userConsoles, games, deleteGame, editGame, addGame, addConsole}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
