import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../Context/user';


const GamesInfo = () => {

    const { id } = useParams();

    const [ userGamesInfo, setUserGamesInfo ] = useState([])

    useEffect(() => {
        fetch(`/games/${id}`)
        .then(res => res.json())
        .then(data => setUserGamesInfo(data))
    }, [])

    const userGamesList = <li key={userGamesInfo.id}>{userGamesInfo.title}: {userGamesInfo.year} -- {userGamesInfo.genre}</li>
    return (
        <ul>
            {userGamesList}
        </ul>
    )
}

export default GamesInfo