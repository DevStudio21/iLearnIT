import firebase from 'firebase'
// Your web app's Firebase configuration
import { firebaseConfig } from 'userCredentials'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.database()
export { auth, db }
