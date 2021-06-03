import React from 'react'

export default function Home() {
    return (
        <div className="container mx-auto">
            <div id="centro" className="flex flex-col items-center">
                <h1 className="text-black font-bold">¿Qué quieres aprender hoy?</h1>
                <input
                    className="w-1/2 rounded-md p-2"
                    type="search"
                    placeholder="Buscar lección"
                    name=""
                    id=""
                />
            </div>
        </div>
    )
}