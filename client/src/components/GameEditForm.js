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
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Year:</label>
                <input type='integer' id='year' value={year} onChange={(e) => setYear(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Genre:</label>
                <input type='text' id='genre' value={genre} onChange={(e) => setGenre(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form>
        </div>
    )
}

export default GameEditForm
