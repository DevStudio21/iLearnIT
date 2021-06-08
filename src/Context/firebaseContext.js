import React, { useEffect, useState } from 'react'
import { auth } from 'firebaseConfig'

const FirebaseContext = React.createContext()

export function FirebaseContextProvider({ children }) {
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, [])
    
    
    return (
        <FirebaseContext.Provider value={{user}}>
            { children }
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext