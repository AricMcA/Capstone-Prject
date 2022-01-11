import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const Games = () => {

    const { games } = useContext(UserContext)

    const gamesList = games.map(g =>  <ul><Link key={g.id} to={`/games/${g.id}`}>{g.title}</Link></ul>)

    return (
        <div>
            {gamesList}
        </div>
    )
}

export default Games