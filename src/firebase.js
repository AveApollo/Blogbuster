import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAgclX9DIp6vTAM2RZ8V0T3mPQHgVtgSMo",
    authDomain: "blogbuster-m335.firebaseapp.com",
    projectId: "blogbuster-m335",
    storageBucket: "blogbuster-m335.appspot.com",
    messagingSenderId: "768288735486",
    appId: "1:768288735486:web:dd5023ce11b17987e665af"
})

export const auth = app.auth()
const db = firebase.firestore()
export default app