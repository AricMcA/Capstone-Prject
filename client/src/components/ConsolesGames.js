import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ConsolesGames = () => {

    const { id } = useParams();

    const [ consoleGames, setConsoleGames ] = useState([])

    useEffect(() => {
        fetch(`/consoles/${id}/games`)
        .then(res => res.json())
        .then(data => setConsoleGames(data))
    }, [])

    const consoleGamesList = consoleGames.map(g => <li key={g.id}>{g.title}: {g.year} -- {g.genre}</li>)

    return (
        <div>
            {consoleGamesList}
        </div>
    )
}

export default ConsolesGames