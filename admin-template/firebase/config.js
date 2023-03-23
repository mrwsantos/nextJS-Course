import firebase from "firebase/app/dist/index.cjs.js";
import "firebase/auth/dist/index.cjs.js";
import process from "process";

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    })
}

export default firebase