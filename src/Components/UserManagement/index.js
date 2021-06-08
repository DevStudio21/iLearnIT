import React from 'react'
import { auth } from 'firebaseConfig'
export default function UserManagement() {
    return (
        <div>
            <h1>Cambiar imagen de perfil</h1>
            <p class="my-3">Cambia tu imagen de perfil y da estilo a tu cuenta</p>
            <button
                class="p-1 rounded-md bg-blue-700 text-white"
            >
                Cambiar imagen de perfil
            </button>
            <div>
                <div
                    class="relative border border-dashed h-48 bg-blue-100 border-blue-200"
                >
                    <input
                        type="file"
                        accept="image/*"
                        id="picture"
                        class="z-10 relative opacity-0 border border-blue-200 w-full h-full"
                    />
                    <div class="absolute flex items-center inset-0">
                        <p class="z-0 mx-auto w-4/5 text-center">
                            Arrastra y suelta la imagen
                        </p>
                        <button
                            class="z-10 absolute bottom-0 p-1 rounded-md bg-blue-700 text-white w-full"
                        >
                            Cancelar
                        </button>
                        <div v-else class="absolute bottom-0 flex w-full">
                            <button
                                class="z-10 w-1/2 p-1 rounded-md bg-blue-700 text-white w-full"
                            >
                                Enviar
                            </button>
                            <button
                                class="z-10 w-1/2 p-1 rounded-md bg-blue-700 text-white w-full"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-around my-2">
                    <div class="flex flex-col items-center">
                        <h1>Imagen actual</h1>
                        <img
                            class="h-20 w-20 rounded-full"
                            src={auth.photoURL}
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col items-center">
                        <h1>Imagen nueva</h1>
                        <img
                            class="h-20 w-20 rounded-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="p-1 rounded-md bg-green-500 text-white">
                Imagen actualizada correctamente
            </div>
        </div>
    )
}
