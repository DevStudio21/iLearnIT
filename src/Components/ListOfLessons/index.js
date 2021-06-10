import React, { useContext } from 'react'
import { Link } from 'wouter'

import FirebaseContext from 'Context/firebaseContext'


export default function ListOfLessons({ numeroTabla, nombreLeccion, descripcion }) {
    const {user} = useContext(FirebaseContext)
    
    return (
        <div className="w-full">
            <div
                className="w-full bg-white rounded-md flex justify-between items-center p-3 mt-10"
            >
                <p className="w-1/5 text-6xl text-center text-orange-600 numero">
                    {numeroTabla}
                </p>
                <p className=" w-4/5 p-1 text-xl text-justify">
                    <span className="block text-xl">{nombreLeccion}</span>
                    {descripcion}
                </p>
                {
                    user &&
                    <Link
                        to="'/leccion/' + value.Id"
                        className="p-1 text-md text-white bg-green-700 rounded-md"
                    >
                        Comenzar
                    </Link>
                }
            </div>
        </div>
    )
}