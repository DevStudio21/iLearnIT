import React, { useContext,useState } from 'react'
import { Link, useLocation } from 'wouter'
import FirebaseContext from 'Context/firebaseContext'
import { auth } from 'firebaseConfig'
import Picture from './picture'

export default function NavBar() {

    const { user } = useContext(FirebaseContext)
    const [show, setShow] = useState(false)
    const [,pushLocation] = useLocation()

    const logout = () => {
        auth.signOut()
            .then(function () {
                pushLocation('/')
            }).catch(function (error) {
                console.log(error);
            });
    }
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="w-full flex justify-between items-center p-3 bg-gray-800">
            <div>
                <Link className="px-2 text-white font-thin text-md" to="/"
                >Inicio</Link>
            </div>
            {
                user ? (
                    <div className="relative">
                        <button
                            onClick={handleShow}
                            className="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
                        >
                            <Picture />
                        </button>
                        {
                            show &&
                            <div
                                className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
                            >
                                <Link
                                    to="/dashboard"
                                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                >Mi cuenta</Link>
                                {/* <Link
                                        v-if="adminlog == true"
                                        to="/dashboard"

                                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                    >Gestión de aplicación</Link > */}
                                <button
                                    onClick={logout}
                                    className="text-left w-full block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                >Cerrar sesión</button>
                            </div>
                        }
                    </div>
                ) : (
                    <div className="flex justify-end">
                        <Link
                            className="px-2 text-white font-thin text-md"
                            to="/login"
                        >Iniciar sesión</Link
                        >
                        <Link
                            className="px-2 text-white font-thin text-md"
                            to="/login"
                        >Registro</Link
                        >
                    </div>
                )
            }
        </div >
    )
}