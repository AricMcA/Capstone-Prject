import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const UsersConsoles = () => {

    const { userConsoles } = useContext(UserContext)

    const userConsolesList = userConsoles.map(uc => <li key={uc.id}><Link to={`/user/consoles/${uc.id}/games`}>{uc.model}</Link></li>)

    return (
        <ul>
            {userConsolesList}
        </ul>
    )
}

export default UsersConsoles