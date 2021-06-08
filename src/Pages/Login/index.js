import React , {useContext} from 'react'
import { auth } from 'firebaseConfig'
import { useLocation } from 'wouter';
import firebase from 'firebase'
import { MicrosoftLoginButton, FacebookLoginButton, GoogleLoginButton, TwitterLoginButton, GithubLoginButton } from "react-social-login-buttons";

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

    const microsoftLogin = () => {
        const provider = new firebase.auth.OAuthProvider('microsoft.com')
        // provider.setCustomParameters({
        //     prompt: "consent",
        //     tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
        //   })
        auth.signInWithPopup(provider)
            .then(function (result) {
                console.log('xbox always')
            })
            .catch(function (error) {
                console.log(error);
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

    const githubLogin = () => {
        const provider = new firebase.auth.GithubAuthProvider()
        auth.signInWithPopup(provider)
            .then(function (result) {
                console.log(result)
            })
            .catch(function (error) {
        
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
                <div onClick={microsoftLogin} className="mt-5">
                    <MicrosoftLoginButton>
                        <span>Login with Microsoft</span>
                    </MicrosoftLoginButton>
                </div>
                <div onClick={githubLogin} className="my-5">
                    <GithubLoginButton>
                        <span>Login with Github</span>
                    </GithubLoginButton>
                </div>
            </div>
        </div>
    )
}