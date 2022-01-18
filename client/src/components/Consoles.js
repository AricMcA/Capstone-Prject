import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const Consoles = () => {

    const { consoles } = useContext(UserContext)

    const consolesList = consoles.map(c =>  <li key={c.id} class="text-2xl py-1 text-cyan-400 font-bold"><Link to={`/consoles/${c.id}/games`}>{c.model} ({c.year}) Storage: {c.storage}</Link></li>)

    return (
        <ul>
            {consolesList}
        </ul>
    )
}

export default Consoles
