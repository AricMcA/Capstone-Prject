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
                <input type='text' id='model' value={model} onChange={(e) => setModel(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Year:</label>
                <input type='integer' id='year' value={year} onChange={(e) => setYear(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <label>Storage:</label>
                <input type='integer' id='storage' value={storage} onChange={(e) => setStorage(e.target.value)} className="border-2 border-cyan-400"/>
                <br/>
                <input type='submit' className="py-1 px-1 my-1 bg-orange-500 rounded-md text-white font-bold"/>
            </form>
        </div>
    )
}

export default ConsoleForm