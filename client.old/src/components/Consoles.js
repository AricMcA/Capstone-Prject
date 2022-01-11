import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const Consoles = () => {

    const { consoles } = useContext(UserContext)

    const consolesList = consoles.map(c =>  <ul><Link key={c.id} to={`/consoles/${c.id}/games`}>{c.model}</Link></ul>)

    return (
        <div>
            {consolesList}
        </div>
    )
}

export default Consoles
