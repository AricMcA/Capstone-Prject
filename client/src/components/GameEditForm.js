import React, {useContext, useState} from 'react'
import { UserContext } from '../Context/user'

const GameEditForm = (props) => {
    const { games, editGame } = useContext(UserContext)
    const [ title, setTitle] = useState(games.title)
    const [ year, setYear] = useState(games.year)
    const [ genre, setGenre] = useState(games.genre)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editGame({
            id: props.editGame.id,
            title: title,
            year: year,
            genre: genre
        })
        props.editGameForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>Year:</label>
                <input type='integer' id='year' value={year} onChange={(e) => setYear(e.target.value)}/>
                <br/>
                <label>Genre:</label>
                <input type='text' id='genre' value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default GameEditForm
