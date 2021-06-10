import React from 'react'
import UserManagement from 'Components/UserManagement'
import Users from 'Components/DashboardLinks/Users'
import Admin from 'Components/DashboardLinks/Admin'
export default function Dashboard() {
    return (
        <div className="container mx-auto relative inset-y-1/4">
            <div className="flex rounded-md bg-white border border-black">
                <Users />
                <div className="w-1/2 p-4">
                    <UserManagement />
                    {/* Visualizar componente con opciones de usuario */}
                </div>
            </div>
      </div>
    )
}