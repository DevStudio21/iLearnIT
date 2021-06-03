import React from 'react'
import { Link } from 'wouter'

export default function NavBar() {
    return (
        <div class="w-full flex justify-between items-center p-3 bg-gray-800">
            <div>
                <Link class="px-2 text-white font-thin text-md" to="/"
                >Inicio</Link>
            </div>
            {/* <div class="relative">
                <button
                    class="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
                >
                    <img
                        v-if="user.photoURL"
                        class="h-full w-full object-cover"
                        alt="Your avatar"
                    />
                    <div v-else class="h-full w-full object-cover bg-white">
                        <span class="text-center uppercase text-3xl" v-text="name"></span>
                    </div>
                </button>
                <div
                    v-if="show"
                    class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
                >
                    <Link
                        to="/micuenta"
                        href="#"
                        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >Mi cuenta</Link>
                    <Link
                        v-if="adminlog == true"
                        to="/dashboard"
                        href="#"
                        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >Gestión de aplicación</Link >
                    <a
                        href="#"
                        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >Cerrar sesión</a
                    >
                </div>
            </div> */}
            <div v-else class="flex justify-end">
                <Link
                    class="px-2 text-white font-thin text-md"
                    to="/login"
                >Iniciar sesión</Link
                >
                <Link
                    class="px-2 text-white font-thin text-md"
                    to="/register"
                >Registro</Link
                >
            </div>
        </div >

    )
}