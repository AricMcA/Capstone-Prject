import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/user'

const ConsoleForm = ({addConsoleForm}) => {
   
    const [ model, setModel] = useState("")
    const [ year, setYear] = useState("")
    const [ storage, setStorage] = useState("")
    const { addConsole } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addConsole({
            model: model,
            year: year,
            storage: storage,
        })
        addConsoleForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Model:</label>
                <input type='text' id='model' value={model} onChange={(e) => setModel(e.target.value)}/>
                <br/>
                <label>Year:</label>
                <input type='integer' id='year' value={year} onChange={(e) => setYear(e.target.value)}/>
                <br/>
                <label>Storage:</label>
                <input type='integer' id='storage' value={storage} onChange={(e) => setStorage(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default ConsoleForm