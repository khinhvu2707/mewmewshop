import { getStorage, ref, getDownloadURL,uploadBytes,uploadBytesResumable } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Z4HvL4YoKC9thL1ZaCH3GuqncX9nQLc",
  authDomain: "nhung-3dd2a.firebaseapp.com",
  projectId: "nhung-3dd2a",
  storageBucket: "nhung-3dd2a.appspot.com",
  messagingSenderId: "96364202949",
  appId: "1:96364202949:web:39bbae62589c76e5f919ac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();


export { storage,ref, getDownloadURL,uploadBytes,uploadBytesResumable};