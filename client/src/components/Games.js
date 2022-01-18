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

    const gamesList = games.map(g =>  <li key={g.id} className="py-1"><Link to={`/games/${g.id}`} class="text-2xl py-1 text-cyan-400 font-bold">{g.title}</Link> <button className="p-2 bg-cyan-400 rounded-md text-white font-bold" onClick={() => handleDelete(g.id)}>DELETE</button> <button className="p-2 bg-cyan-400 rounded-md text-white font-bold" onClick={() => editGameForm(g)}>EDIT</button></li>)

    return (
        <div>
            <h1 className="text-orange-500 text-2xl font-bold">Games:</h1>
        <ul>
            {gamesList}
        </ul>
            {formAddFlag ? 
                <GameForm addGameForm={addGameForm} /> : <button className="py-1.5 px-1 bg-orange-500 rounded-md text-white font-bold" onClick={() => setFormAddFlag(true)}>Add Game</button>
            }
            {formEditFlag ? 
                <GameEditForm editGame={editingGame} editGameForm={editingGameForm}/> : null
            }
        </div>
    )
}

export default Games