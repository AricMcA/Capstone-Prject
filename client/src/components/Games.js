import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'
import GameEditForm from './GameEditForm'

const Games = () => {

    const { games, deleteGame } = useContext(UserContext)
    const [ editingGame, setEditingGame ] = useState([])
    const [ formEditFlag, setFormEditFlag ] = useState(false)


    const handleDelete = (id) => {
        deleteGame(id)
    }

    const editGameForm = (game) => {
        setEditingGame(game)
        setFormEditFlag(true)
    }

    const editingGameForm = () => {
        setFormEditFlag(false)
    }

    const gamesList = games.map(g =>  <li key={g.id}><Link to={`/games/${g.id}`}>{g.title}</Link> <button onClick={() => handleDelete(g.id)}>delete</button> <button onClick={() => editGameForm(g)}>Edit</button></li>)

    return (
        <div>
            <h1>Games:</h1>
        <ul>
            {gamesList}
        </ul>
            {formEditFlag ? 
                <GameEditForm editGame={editingGame} editGameForm={editingGameForm}/> : null
            }
        </div>
    )
}

export default Games