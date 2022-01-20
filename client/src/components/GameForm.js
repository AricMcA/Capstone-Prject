import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/user'

const GameForm = ({addGameForm}) => {
   
    const [ title, setTitle] = useState("")
    const [ year, setYear] = useState("")
    const [ genre, setGenre] = useState("")
    const [ model, setModel] = useState("")
    const [ consoleYear, setConsoleYear] = useState("")
    const [ storage, setStorage] = useState("")
    const [ console_id, setConsole_id ] = useState(undefined)
    const { addGame, consoles } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({
            title: title,
            year: year,
            genre: genre,
            console_id: console_id,
            console_attributes: {
                model: model,
                year: consoleYear,
                storage: storage
            }
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
                <label>Select Existing Console:</label>
                <select name="console_id" value={console_id} onChange={(e) => setConsole_id(e.target.value)}>
                    <option value="null" disabled selected hidden>Select Console</option>
                    {consoleList}
                </select>
                <br/>
                <h1>Or Make a New Console:</h1>
                <label>Model:</label>
                <input type='text' id='model' value={model} onChange={(e) => setModel(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Year:</label>
                <input type='integer' id='console_year' value={consoleYear} onChange={(e) => setConsoleYear(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Storage:</label>
                <input type='integer' id='storage' value={storage} onChange={(e) => setStorage(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form>
        </div>
    )
}

export default GameForm
