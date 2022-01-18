import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const UsersConsoles = () => {

    const { userConsoles } = useContext(UserContext)

    const userConsolesList = userConsoles.map(uc => <li key={uc.id} class="text-2xl py-1 text-cyan-400 font-bold"><Link to={`/user/consoles/${uc.id}/games`}>{uc.model}</Link></li>)

    return (
        <ul>
            {userConsolesList}
        </ul>
    )
}

export default UsersConsoles