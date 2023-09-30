import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const [user, setUser] = useContext(UserContext)
    /*
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
    */
   return <>
        {user ? <div>Welcome {user.username}</div> :   <div>please login</div>}
   </>
}

export default Profile