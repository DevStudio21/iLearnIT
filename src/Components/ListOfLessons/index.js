import React from 'react'
import { Link } from 'wouter'

export default function ListOfLessons() {
    return (
        <div id="altura" className="w-full overflow-y-auto">
            <div
                className="w-full bg-white rounded-md flex justify-between items-center p-3 mt-10"
            >
                <p className="w-1/5 text-6xl text-center text-orange-600 numero">
                    10
                </p>
                <p className="w-4/5 p-1 text-sm text-justify">
                    <span className="block text-xl">Tabla del 10</span>
                </p>
                <Link
                    v-if="auth"
                    to="'/leccion/' + value.Id"
                    tag="button"
                    className="p-1 text-md text-white bg-green-700 rounded-md"
                >
                    Comenzar
                </Link>
            </div>
        </div>
    )
}