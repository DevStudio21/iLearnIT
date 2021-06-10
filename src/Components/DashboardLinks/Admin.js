import React from 'react'
import { Link } from 'wouter'

export default function Admin() {
    return (
        <div className="p-10 w-1/2 flex border-r border-black flex-col">
            <Link className="my-5" to="users">Gestión de usuarios</Link>
            <Link className="my-5" to="lessons">Gestión de lecciones</Link>
            <a href="#">Cerrar sesión</a>
      </div>
    )
}
