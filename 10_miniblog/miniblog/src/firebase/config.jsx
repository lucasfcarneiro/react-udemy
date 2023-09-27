// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3J8rM7KW7Dil2Lr5ESh7TiFPnuBgAVrI",
  authDomain: "miniblog-4524a.firebaseapp.com",
  projectId: "miniblog-4524a",
  storageBucket: "miniblog-4524a.appspot.com",
  messagingSenderId: "167903271680",
  appId: "1:167903271680:web:b5ac995b4f90561540b1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export {db};
