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

    const consoleGamesList = consoleGames.map(g => <li key={g.id} className="pt-5 text-orange-500 font-bold text-xl">{g.title}: {g.year} -- {g.genre}</li>)

    return (
        <ul>
            {consoleGamesList}
        </ul>
    )
}

export default ConsolesGames