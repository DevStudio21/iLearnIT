import React , {useContext} from 'react'
import { auth } from 'firebaseConfig'
import { useLocation } from 'wouter';
import firebase from 'firebase'
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";

import FirebaseContext from 'Context/firebaseContext';

import './styles.css'

export default function Login() {

    const { user } = useContext(FirebaseContext)
    const [,pushLocation] = useLocation()
    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
            .then((result) => {
                pushLocation('/')
            })
            .catch((error) => {

            });
    }

    const facebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        auth.signInWithPopup(provider)
            .then(function (result) {
                pushLocation('/')   
            })
            .catch(function (error) {
        
            });

    }
    const twitterLogin = () => {
        const provider = new firebase.auth.TwitterAuthProvider()
        auth.signInWithPopup(provider)
            .then(function (result) {
                pushLocation('/')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if(user) 
        pushLocation('/')

    return (
        <div
            className="container rounded-md bg-white mx-auto px-10 py-5 md:px-2 md:py-2 md:w-2/3 relative inset-y-1/4"
        >
            <h1 className="text-center text-3xl font-light">
                Iniciar sesión
            </h1>
            <p className="text-center mt-5">Para facilitarte el acceso a nuestra plataforma, te proponemos acceder a ella a través de las siguientes plataformas y así evitas tener que rellenar tanto dato y vas al grano.</p>
            <div className="w-1/2 mx-auto flex flex-col mt-5">
                <div onClick={googleLogin}>
                    <GoogleLoginButton>
                        <span>Login with Google</span>
                    </GoogleLoginButton>
                </div>
                <div className="mt-5">
                    <FacebookLoginButton onClick={facebookLogin}>
                        <span>Login with Facebook</span>
                    </FacebookLoginButton>
                </div>
                <div onClick={twitterLogin} className="mt-5">
                    <TwitterLoginButton>
                        <span>Login with Twitter</span>
                    </TwitterLoginButton>
                </div>
            </div>
        </div>
    )
}