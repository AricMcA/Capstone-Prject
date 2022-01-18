import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/user'
import ConsoleForm from './ConsoleForm'

const GameForm = ({addGameForm}) => {
   
    const [ title, setTitle] = useState("")
    const [ year, setYear] = useState("")
    const [ genre, setGenre] = useState("")
    const [ console_id, setConsole_id ] = useState(undefined)
    const [ consoleFormAddFlag, setConsoleFormAddFlag ] = useState(false)
    const { addGame, consoles } = useContext(UserContext)

    const addConsoleForm = () => {
        setConsoleFormAddFlag(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({
            title: title,
            year: year,
            genre: genre,
            console_id: console_id
        })
        addGameForm()
    }

    const consoleList = consoles.map(c => <option key={c.id} value={c.id}>{c.model}</option>)

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
                <label>Console:</label>
                <select name="console_id" value={console_id} onChange={(e) => setConsole_id(e.target.value)}>
                    <option value="null" disabled selected hidden>Select Console</option>
                    {consoleList}
                </select>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form>
                {consoleFormAddFlag ? 
                <ConsoleForm addConsoleForm={addConsoleForm} /> : <button onClick={() => setConsoleFormAddFlag(true)} className="py-1 px-1 bg-cyan-400 rounded-md text-white font-bold my-2">Add Console</button>
                }
        </div>
    )
}

export default GameForm
