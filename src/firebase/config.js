import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFBitDiBs7z3Be_eZ37wI7j-2PlrjOIS4",
    authDomain: "my-tienda-import.firebaseapp.com",
    projectId: "my-tienda-import",
    storageBucket: "my-tienda-import.firebasestorage.app",
    messagingSenderId: "103821012740",
    appId: "1:103821012740:web:c0eb8d3948445dc6ca2a51",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
