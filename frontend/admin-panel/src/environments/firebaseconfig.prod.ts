import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseconfig = {
    apiKey: "AIzaSyAHotSG1PBb_Vt54IIELMhsPjV9pBljdV8",
    authDomain: "camperfinder-b6b5b.firebaseapp.com",
    projectId: "camperfinder-b6b5b",
    storageBucket: "camperfinder-b6b5b.appspot.com",
    messagingSenderId: "422215153487",
    appId: "1:422215153487:web:919e4f84f562989c6ef73a",
    measurementId: "G-EXX5R8R6S1"
};


const app = initializeApp(firebaseconfig);
const analytics = getAnalytics(app);
