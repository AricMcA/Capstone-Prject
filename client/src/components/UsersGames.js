import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UsersGames = () => {

    const { id } = useParams();

    const [ userGames, setUserGames ] = useState([])

    useEffect(() => {
        fetch(`/user/consoles/${id}/games`)
        .then(res => res.json())
        .then(data => setUserGames(data))
    }, [])

    const userGamesList = userGames.map(ug => <li key={ug.id}>{ug.title}: {ug.year} -- {ug.genre}</li>)

    return (
        <div>
            {userGamesList}
        </div>
    )
}

export default UsersGames