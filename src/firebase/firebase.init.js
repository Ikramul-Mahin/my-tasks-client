// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWOv8ABuwLYJPVQ4qdJI27yyCr3sDBXbE",
    authDomain: "daily-task-23738.firebaseapp.com",
    projectId: "daily-task-23738",
    storageBucket: "daily-task-23738.appspot.com",
    messagingSenderId: "51397250221",
    appId: "1:51397250221:web:9de9826db523e185baca24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app