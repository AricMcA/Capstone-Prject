import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Link } from 'react-router-dom'

const UsersConsoles = () => {

    const { userConsoles } = useContext(UserContext)

    const userConsolesList = userConsoles.map(uc =>  <ul><Link key={uc.id} to={`/user/consoles/${uc.id}/games`}>{uc.model}</Link></ul>)

    return (
        <div>
            {userConsolesList}
        </div>
    )
}

export default UsersConsoles