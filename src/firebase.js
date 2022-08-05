// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpcyKs_D31AmhIMZ1rUvqgHY4xR2u4wY",
  authDomain: "finder-26982.firebaseapp.com",
  projectId: "finder-26982",
  storageBucket: "finder-26982.appspot.com",
  messagingSenderId: "472760369027",
  appId: "1:472760369027:web:c055d15df7dce2de6c00b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();