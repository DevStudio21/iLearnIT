import React, { useContext } from 'react'
import FirebaseContext from 'Context/firebaseContext'

export default function Picture() {
    const { user } = useContext(FirebaseContext)
    
    return (
        user.photoURL ? (
            <img
                src={user.photoURL}
                className="h-full w-full object-cover"
                alt="Your avatar"
            />
        ) :
            (
                <div className="h-full w-full object-cover bg-white">
                    <span className="text-center uppercase text-3xl">{user.displayName}</span>
                </div>
            )
    )
}
