import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const Consoles = () => {

    const { consoles } = useContext(UserContext)

    const consolesList = consoles.map(c =>  <li key={c.id}><Link to={`/consoles/${c.id}/games`}>{c.model}</Link></li>)

    return (
        <ul>
            {consolesList}
        </ul>
    )
}

export default Consoles
