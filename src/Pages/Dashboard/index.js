import React from 'react'
import { Link } from 'wouter'

import UserManagement from 'Components/UserManagement'
export default function Dashboard() {
    return (
        <div class="container mx-auto relative inset-y-1/4">
            <div class="flex rounded-md bg-white border border-black">
                <div class="p-10 w-2/5 flex border-r border-black flex-col">
                    <Link tag="a" class="my-5" to="opciones">Mi Cuenta</Link>
                    <Link class="my-5" to="logros">Logros</Link>
                    <a href="#">Cerrar sesión</a>
                </div>
                <div class="w-1/2 p-4">
                    <UserManagement />
                    {/* Visualizar componente con opciones de usuario */}
                </div>
            </div>
      </div>
    )
}