import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLZNKZcFr7-zA6dWyh6V0_aBRKELJKO_M",
  authDomain: "gadgetfreak3-a9348.firebaseapp.com",
  projectId: "gadgetfreak3-a9348",
  storageBucket: "gadgetfreak3-a9348.appspot.com",
  messagingSenderId: "662349694636",
  appId: "1:662349694636:web:df10f28331fc4ef2bf0109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;