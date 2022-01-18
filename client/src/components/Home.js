import React, { useContext } from 'react'
import { UserContext } from '../Context/user'

const Home = () => {

    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn && user){
        return (
            <div>
                <h1 class="text-2xl py-1 text-cyan-400 font-bold">Video Game Catalog</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1 class="text-2xl py-1 text-cyan-400 font-bold">Video Game Catalog</h1>
                <h3 class="text-2xl py-1 text-cyan-400 font-bold">Please Login or Signup to continue...</h3>
            </div>
        )
    }

}

export default Home
