import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt-zVUB-pn6KLt1INtPWlYgloqNSIV4fY",
  authDomain: "proyecto-daw-eba1d.firebaseapp.com",
  databaseURL: "https://proyecto-daw-eba1d.firebaseio.com",
  projectId: "proyecto-daw-eba1d",
  storageBucket: "proyecto-daw-eba1d.appspot.com",
  messagingSenderId: "503936455919",
  appId: "1:503936455919:web:488d8b93951bd6ff6d771a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.database();
export { auth, db }