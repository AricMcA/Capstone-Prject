import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'
import GameEditForm from './GameEditForm'
import GameForm from './GameForm'

const Games = () => {

    const { games, deleteGame } = useContext(UserContext)
    const [ editingGame, setEditingGame ] = useState([])
    const [ formEditFlag, setFormEditFlag ] = useState(false)
    const [ formAddFlag, setFormAddFlag ] = useState(false)

    const addGameForm = () => {
        setFormAddFlag(false)
    }

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

    const gamesList = games.map(g =>  <li key={g.id}><Link to={`/games/${g.id}`}>{g.title}</Link> <button className="p-2 bg-cyan-400 rounded-md text-white font-bold" onClick={() => handleDelete(g.id)}>DELETE</button> <button className="p-2 bg-cyan-400 rounded-md text-white font-bold" onClick={() => editGameForm(g)}>EDIT</button></li>)

    return (
        <div>
            <h1>Games:</h1>
        <ul>
            {gamesList}
        </ul>
            {formAddFlag ? 
                <GameForm addGameForm={addGameForm} /> : <button onClick={() => setFormAddFlag(true)}>Add Game</button>
            }
            {formEditFlag ? 
                <GameEditForm editGame={editingGame} editGameForm={editingGameForm}/> : null
            }
        </div>
    )
}

export default Games