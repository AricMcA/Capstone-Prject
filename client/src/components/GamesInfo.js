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

    return (
        <ul>
            <h1 className="pt-5 text-orange-500 font-bold text-xl">{userGamesInfo.title}</h1>
            <h3 className="pt-2 text-orange-500 font-bold text-xl">{userGamesInfo.year}</h3>
            <h3 className="pt-2 text-orange-500 font-bold text-xl">{userGamesInfo.genre}</h3>
        </ul>
    )
}

export default GamesInfo