import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDILjOiI3xGV8bKGNlHJJdjfpQAXVUfDw0",
    authDomain: "web-clone-9fb58.firebaseapp.com",
    projectId: "web-clone-9fb58",
    storageBucket: "web-clone-9fb58.appspot.com",
    messagingSenderId: "363604158425",
    appId: "1:363604158425:web:b315b34bb4fdbbd5071bc8",
    measurementId: "G-H34YLSM38T"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };

