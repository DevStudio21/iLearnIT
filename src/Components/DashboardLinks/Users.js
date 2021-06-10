import React from 'react'
import { Link } from 'wouter'
export default function Users() {
    return (
        <div className="p-10 w-2/5 flex border-r border-black flex-col">
            <Link tag="a" className="my-5" to="opciones">Mi Cuenta</Link>
            <Link className="my-5" to="logros">Logros</Link>
            <a href="#">Cerrar sesión</a>
        </div>  
    )
}
