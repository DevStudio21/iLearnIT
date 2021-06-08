import React from 'react'

import ListOfLessons from 'Components/ListOfLessons'


export default function Home() {
    return (
        <div className="container mx-auto">
            <div id="centro" className="flex flex-col items-center absolute inset-1/4 w-1/2">
                <h1 className="w-full text-center text-white font-bold text-4xl mb-8">¿Qué quieres aprender hoy?</h1>
                <input
                    className="w-full rounded-md p-2"
                    type="search"
                    placeholder="Buscar lección"
                    name=""
                    id=""
                />
                <ListOfLessons />
            </div>
        </div>
    )
}