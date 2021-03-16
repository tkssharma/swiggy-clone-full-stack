import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PUBLIC_DATABASE_URL,
    projectId: process.env.REACT_APP_PUBLIC_PROJECTID,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_SENDER_ID,
    appId: process.env.REACT_APP_PUBLIC_APPID,
    measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
}
console.log(firebaseConfig);
firebase.default.initializeApp(firebaseConfig);
export const auth = firebase.default.auth();