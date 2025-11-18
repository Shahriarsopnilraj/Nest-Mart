import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children})=>{
const [user, setUser] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
    fetch('/user.json').then(res => res.json).then(data => {
        setUser(data);
        setLoading(false)
    })
},[])

const value = {user , loading}

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider