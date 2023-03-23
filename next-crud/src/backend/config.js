import firebase from "firebase/app/dist/index.cjs.js";
import "firebase/firestore/dist/index.node.cjs.js";
import process from "process";

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
