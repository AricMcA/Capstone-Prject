import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const Games = () => {

    const { games } = useContext(UserContext)

    const gamesList = games.map(g =>  <li key={g.id}><Link to={`/games/${g.id}`}>{g.title}</Link></li>)

    return (
        <ul>
            {gamesList}
        </ul>
    )
}

export default Games