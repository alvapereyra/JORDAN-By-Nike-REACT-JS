// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYzQtBVocuEQnJqH8XX1W3gH9qzxto-08",
    authDomain: "jordanbynikereact.firebaseapp.com",
    projectId: "jordanbynikereact",
    storageBucket: "jordanbynikereact.appspot.com",
    messagingSenderId: "230245096496",
    appId: "1:230245096496:web:44411226887bf74bcf61f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
// setPersistence(auth, browserLocalPersistence);