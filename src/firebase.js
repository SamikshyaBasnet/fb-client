import {
    initializeApp
} from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';



import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // this is where your firebase config goes
    apiKey: "AIzaSyCPdn3IpJJLQkrckKrSxxFfWEx0YyqqwQU",
    authDomain: "fb-clone-eec16.firebaseapp.com",
    projectId: "fb-clone-eec16",
    storageBucket: "fb-clone-eec16.appspot.com",
    messagingSenderId: "982636223819",
    appId: "1:982636223819:web:2e2bebdbd0aac267e49cce",
    measurementId: "G-ZHDX59FP1H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export {
    auth,
    provider
}
export default db