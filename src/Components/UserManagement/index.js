import React, { useContext, useState } from 'react'
import { useLocation } from 'wouter'
import firebase from 'firebase'
import FirebaseContext from 'Context/firebaseContext'
import { auth } from 'firebaseConfig'
import Unsuscribe from 'Components/Modals/unsuscribe'
export default function UserManagement() {

    const { user } = useContext(FirebaseContext)
    const [,pushLocation] = useLocation()
    const [updatePicture, setUpdatePicture] = useState(false)
    const [send, setSend] = useState(false)
    const [newPicture, setNewPicture] = useState(null)
    const [pictureToSend, setPictureToSend] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [visibleUnsuscribeModal, setVisibleUnsuscribeModal] = useState(false)

    const showUpdatePicture = () => {
        setUpdatePicture(!updatePicture)
    }
    const handlePicrute = (evt) => {
        setPictureToSend(evt.target.files[0])
        setNewPicture(URL.createObjectURL(evt.target.files[0]))
        setSend(true)
    }

    const handleCancel = () => {
        setUpdatePicture(false)
        setSend(false)
        setNewPicture(null)

    }

    const sendPictureFirebase = () => {
        const storageRef = firebase.storage().ref().child('profiles_pictures/'+firebase.auth().currentUser.uid)
        storageRef.put(pictureToSend).then(() => {
            storageRef.getDownloadURL().then((url) => {
                auth.currentUser.updateProfile({
                    photoURL: url,
                })
            })
        })

        handleCancel()
        setUpdated(true)
        setTimeout(() => {
            setUpdated(false)
        }, 3000)

    }

    const showUnsuscribeModal = () => {
        setVisibleUnsuscribeModal(!visibleUnsuscribeModal)
    }

    const deleteAccount = () => {
        const storageRef = firebase.storage().ref();
        const profilePicture = storageRef.child('profiles_pictures/'+firebase.auth().currentUser.uid)
       
        if(profilePicture){
            profilePicture.delete()
        }

        if(firebase.database().ref('Logros/'+ auth.uid)){

            firebase.database().ref('Logros/'+ auth.uid).remove()
        }

        auth.currentUser.delete()
            .then(() => pushLocation('/'));
    }

    return (
        <div>
            <h1>Cambiar imagen de perfil</h1>
            <p className="my-3">Cambia tu imagen de perfil y da estilo a tu cuenta</p>
            {
                updatePicture ? (<>
                    <div>
                        <div
                            className="relative border border-dashed h-48 bg-blue-100 border-blue-200"
                        >
                            <input
                                onChange={handlePicrute}
                                type="file"
                                accept="image/*"
                                id="picture"
                                className="z-10 relative opacity-0 border border-blue-200 w-full h-full"
                            />
                            <div className="absolute flex items-center inset-0">
                                <p className="z-0 mx-auto w-4/5 text-center">
                                    Arrastra y suelta la imagen
                                </p>
                                {
                                    !send ? (
                                        <button
                                            onClick={handleCancel}
                                            className="z-10 absolute bottom-0 p-1 rounded-md bg-blue-700 text-white w-full"
                                        >
                                            Cancelar
                                        </button>

                                    ) : (
                                        <div className="absolute bottom-0 flex w-full">
                                            <button
                                                onClick={sendPictureFirebase}
                                                className="z-10 w-1/2 p-1 rounded-md bg-blue-700 text-white w-full"
                                            >
                                                Enviar
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="z-10 w-1/2 p-1 rounded-md bg-blue-700 text-white w-full"
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex justify-around my-2">
                            <div className="flex flex-col items-center">
                                <h1>Imagen actual</h1>
                                <img
                                    className="h-20 w-20 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h1>Imagen nueva</h1>
                                <img
                                    className="h-20 w-20 rounded-full"
                                    alt=""
                                    src={newPicture}
                                />
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    {
                        updated &&
                        <div className="p-1 rounded-md bg-green-500 text-white">
                            Imagen actualizada correctamente
                        </div>
                    }
                    {
                       !updated && 
                       <button
                        onClick={showUpdatePicture}
                            className="p-1 rounded-md bg-blue-700 text-white"
                        >
                            Cambiar imagen de perfil
                        </button>
                    }
                </>)
            }
            <div className="my-5">
                <h1>Eliminar cuenta</h1>
                <p className="my-3">
                    Darse de baja conlleva la pérdida de todos los datos y de todos tus
                    progresos
                </p>
                <button
                    onClick={showUnsuscribeModal}
                    className="p-1 rounded-md bg-red-700 text-white"
                >
                    Darse de baja
                </button>
            </div>
            {
                visibleUnsuscribeModal &&
                <Unsuscribe onCancel={showUnsuscribeModal} onAgree={deleteAccount} />
            }
        </div>
    )
}
